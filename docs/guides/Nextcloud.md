---
id: Nextcloud
title: Nextcloud Server Ubuntu 20.04
---

<i>22 June, 2021, Luke Reynolds</i><br/>
<i>Difficulty: Advanced</i>

<br/><br/>

In my pursuit to find a self-hosted replacement for my current cloud based providers such as OneNote, Google Drive, Photos, Calendar, and Contacts i've decided to setup a Nextcloud server. The server will be responsible for hosting and syncing my documents, photos, and other important day to day data between my devices. The server features a fully qualified domain name, Nginx reverse proxy, SSL encryption, 2FA, Android connectivity, and VNC for remote maintenance.

[<img alt="Nextcloud UI Preview" src="/img/NextcloudUI.png" />](https://nextcloud.com/)

##### Requirements (Local Connection)
1. A computer to use as a server (I'm using an old Surface Pro).

2. Access to a router.

<br/>

##### Optional Requirements (Internet Connection)
3. A static IP and domain name or dynamicDNS.

<!--truncate-->

<br/><br/>

<h2>Local Cloud Setup</h2>

### Nextcloud Virtual Machine
For the host operating system I decided to install [Ubuntu 20.04](https://ubuntu.com/download/desktop) because it supports automatic updates but you can use whatever operating system you prefer. 

Once the host machine has a fresh operating system installed, download and install [VirtualBox](https://www.virtualbox.org/) or your preferred virtualization software and download the latest [Ubuntu Server Image](https://ubuntu.com/download/server) (Option 2).

Once the virtualization software is installed create a new virtual machine for the Nextcloud server. Setting the VM's hard drive to dynamically allocated and limiting the size to whatever space is available on the physical hard drive at the time subtracting ~20gb for the host operating system.

After creating the virtual machine go into the network settings and set the mode to bridged. This sets the machine as an independent host on the network allowing visibility.

<br/>

### Nextcloud Server Setup
Start up the nextcloud server and select the ubuntu server image when prompted for a startup disk. This will load up the ubuntu server image and begin the installation process. The only extra step to do during the installation is to select the Nextcloud snap when prompted with the list of commonly installed snaps.

<br/>

### Setting a Static IP for the VM
To set a static IP on the virtual machine start it up and run the following command to install net-tools. 
```jsx
sudo apt install net-tools
```

Once net-tools is installed run `ifconfig` and note down the current IP address of the virtual machine.

Next we will modify the netplan .yaml file. 
```jsx
sudo nano /etc/netplan/00-installer-config.yaml
```

Modifying the file to appear as follows (replacing [ip-address] and [gateway]):
```jsx
network:
version: 2
renderer: network
     ethernets:
         ens3:
             dhcp4: no
             addresses:
                 - [ip-address]/24
             gateway4: [gateway]
             nameservers:
                 addresses: [8.8.8.8, 1.1.1.1]
```

Ctrl-X, Y, Enter to save and exit. Then run: 
```jsx
sudo netplan apply
```
<br/><br/>

<h2>Remote Maintenance</h2>

### RealVNC Server Setup
Download and install [RealVNC Server](https://www.realvnc.com/en/connect/download/vnc/) to the host machine.

<br/>

### RealVNC Viewer Setup
Download and install [RealVNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) to your mobile or desktop PC to access your server remotely.

<br/>

### RealVNC 2-Factor Authentication
Install FreeOTP+ or your chosen 2FA code generator from [Playstore](https://play.google.com/store/apps/details?id=org.liberty.android.freeotpplus&hl=en_US&gl=US)

Once your 2FA application is ready, go to the RealVNC website, sign in, and setup 2FA. 

<br/><br/>

<h2>Exposing Server to the Internet</h2>
NOTE: If you are only configuring Nextcloud for a local network you can stop here. To access, type the Nextcloud server's IP address in a browser and follow the setup guide.

<br/>

### NginX Reverse Proxy Virtual Machine
Create a new virtual machine for the NginX Reverse Proxy. Set it up the same as the Nextcloud server: hard drive dynamically allocated with a maximum of 8gb and the network mode to bridged.

<br/>

### Reverse Proxy Server Setup
Start up the reverse proxy server and go through the motions of installing ubuntu server, this time not selecting any snaps when prompted. Once installation is complete login and set a static IP for the VM. Refer to the nextcloud [static IP](#setting-a-static-ip-for-the-vm) for guidance.

Once logged in, install NginX with 
```jsx
sudo apt install nginx
```

Once NginX is installed create a config file for your domain (substituting [your-domain.url] as needed) 
```jsx
sudo nano /etc/nginx/sites-enabled/[your-domain.url]
```

and edit it to appear as follows (substituting [your-domain.url] and [your-nextcloud-ip] as needed):
```jsx
server {
     listen 80;
     server_name [your-domain.url];
     return 301 https://$server_name:443$request_uri;
}

server {
     listen 443 ssl;
     server_name [your-domain.url];

     ssl_certificate /etc/letsencrypt/live/[your-domain.url]/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/[your-domain.url]/privkey.com;

     add_header Strict-Transport-Security 'max-age=31536000; includeSubDomains; preload';
     add_header X-XSS-Protection "1; mode=block" always;
     add_header X-Frame-Options "SAMEORIGIN" always;
     add_header X-Content-Type-Options "nosniff" always;
     add_header X-Permitted-Cross-Domain
     add_header X-Robots-Tag "none" always;
     add_header Referrer-Policy "no-referrer" always;
    
     client_max_body_size 10G;
     client_body_buffer_size 400M;

     location = /.well-known/carddav {
        return 301 $scheme://$host/remote.php/dav;
     }

     location = /.well-known/caldav {
        return 301 $scheme://$host/remote.php/dav;
     }

     location = / {
          proxy_headers_hash_max_size 512;
          proxy_headers_hash_bucket_size 64;
          proxy_set_header Host $host;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

          add_header Front-End-Https on;
          proxy_pass http://[your-nextcloud-ip];
     }
}
```
NOTE: This configuration file is designed for a HTTPS connection and will not function correctly until SSL encryption has been configured.

<br/>

### Port Forwarding
In your router’s settings, configure port 80 to forward all traffic to the NginX server and port 443 to forward TCP traffic to the NginX server. For additional help please refer to your router's online manual.

<br/>

### Static IP or Dynamic DNS
##### Option 1: Static IP & Domain Name
This option requires that your internet service provider is delegating a static IP to your internet connection. This usually comes default on business lines and can be an optional extra for home connections. It additionally requires the ownership of a domain name.

Configure A records in your domain's DNS configuration portal to point at your public static IP address. For help finding your public IP address click [here](https://www.whatismyip.com/).

<br/>

##### Option 2: Dynamic DNS
Free DynamicDNS services such as [NoIP](https://www.noip.com/) are available and may provide a suitable replacement for a domain name and static IP.

This option is by no means ideal but can be a suitable work around for an environment without access to the requirements for the first solution.

<br/><br/>

<h2>Securing the Server</h2>

### Enable Firewall
Enable UFW on the Host, Nextcloud, and NginX server forwarding all traffic on port 80 and all TCP traffic on 443.
```jsx
sudo ufw enable && sudo ufw allow 80 && sudo ufw allow 443/tcp
```

<br/>

### SSL Encryption
The last step that should really be done if the nextcloud will be accessed over the internet is to set up SSL encryption so that the server can be accessed through HTTPS. This will ensure that your files etc will be encrypted en route to and from the server though not on the server, which is fine since an account with a password is required to access it.

This is actually pretty easy to do thanks to Let's Encrypt. Ensure port 443 is forwarding in your router's configuration as that's the port used for SSL.

The certificates need to be set up on the nginx server, because that will be the terminal for ssl connections. So log into the NginX server and install Let's Encrypt's certbot by typing:
```jsx
sudo snap install --classic certbot
```

Once certbot is installed, create a config file for NginX (substituting [your-domain.url] as needed).
```jsx
sudo certbot --nginx -d [your-domain.url]
```

Install the proxy's config file (ensure to type full pathing or the link will fail).
```jsx
sudo ln -s /etc/nginx/sites-available/[your-domain.url] /etc/nginx/sites-enabled/
```

Finally, restart nginx
```jsx
sudo service nginx restart
```
<br/>

### Automatic Certificate Renewal
The SSL certificates expire every 90 days, but they can be easily and non-interactively renewed with
```jsx
sudo certbot renew
```

So just set up a cron job to do this every other month or so.
```jsx
sudo crontab -e
```

Adding the line
```jsx
0 0 1 */2 * /usr/bin/certbot -q renew
```

Which will automatically renew the certificates at midnight on the first of every other month.
<br/><br/>

### 2-Factor Authentication
Login to your Nextcloud instance, click your profile at the top right and select Apps. Go to Security and download and enable Two-Factor TOTP Provider.
Once the application is installed, go to Settings -> Security -> Enable TOTP
Use the same authenticator you installed for RealVNC to configure 2FA for your Nextcloud server.

<br/><br/>

<h2>Android Connectivity</h2>

### Nextcloud App Code
Navigate to your Nextcloud portal, go to Settings -> Personal -> Security. Scroll to the bottom of the page and type the name of the app you would like to grant access to. Click create new app password. Go back to the application you want to connect to your Nextcloud server, type in your username and the 29 character one time app password.

<br/>

### Calendar, Contact, and Task Syncronization Client
Install DAVx⁵ from the [Playstore](https://play.google.com/store/apps/details?id=at.bitfire.davdroid&hl=en_US&gl=US).

Once DAVx⁵ is installed, login to the app using a Nextcloud app code and allow the permissions you require. Once the app is finished configuring it will automatically sync all of your calendar events, contacts, and tasks with the phone's system apps.

<br/>

### Recommended Applications
A list of useful open source Android applications that extend the usability of the Nextcloud server.
- Nextcloud Syncronization Client available on the [Playstore](https://play.google.com/store/apps/details?id=com.nextcloud.client&hl=en_US&gl=US)
- Joplin Notes available on the [Playstore](https://play.google.com/store/apps/details?id=net.cozic.joplin&hl=en_US&gl=US)
- Simple Calendar Pro available on the [Playstore](https://play.google.com/store/apps/details?id=com.simplemobiletools.calendar&hl=en_US&gl=Us)

<br/><br/>

<h2>References</h2>

- https://llazarek.github.io/2018/08/setting-up-a-home-cloud-server-with-nextcloud.html
- https://linuxize.com/post/how-to-configure-static-ip-address-on-ubuntu-20-04/
- https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx
