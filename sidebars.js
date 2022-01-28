module.exports = {
  docs: [
    'about/Welcome',
    {
      type: 'category',
      label: 'Open Source Software',
      items: [
        {
          'Web Browsers': [
            'about/Brave',
            'about/Firefox',
          ],
        },
        {
          'Communications': [
            'about/Signal',
            'about/Tutanota',
          ],
        },
        {
          'Office Tools': [
            'about/LibreOffice', 
            'about/Skiff',
            'about/Joplin',
            'about/InvoiceNinja',
            'about/UVdesk',
          ],
        },
        {
          '2D/3D Modeling': [
            'about/Krita',
            'about/Thingiverse',
            'about/Tinkercad',
            'about/Blender',
            'about/Cura',
          ],
        },
        {
          'Development': [
            'about/VSCode',
            'about/Focalboard',
            'about/Mattermost',
          ]
        },
        {
          'Desktop Operating Systems': [
            'about/Kubuntu', 
            'about/Ubuntu',
          ],
        },
        {
          'Mobile Operating Systems': [
            'about/GrapheneOS', 
            'about/UbuntuTouch',
          ],
        },
        {
          type: 'category',
          label: 'Server',
          items: [
            {
              'Virtualisation': [
                'about/Proxmox',
                'about/VirtualBox',
                'about/UbuntuServer',
              ]
            },
            {
              'Services': [
                'about/Nextcloud',
                'about/Jellyfin',
                'about/RealVNC',
              ]
            },            
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Trusted Providers',
      items: [
        {
          'Hosting': [ 
            'about/GoDaddy',
            'about/Cloudflare', 
            'about/GitHub', 
            'about/Vercel',
            'about/UnstoppableDomains',
          ],
        },
        {
          'Payment Systems': [
            'about/Zeller',
            'about/Square',
          ],
        },
        {
          'Marketing': [
            'about/Canva',
            'about/SendGrid',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Privacy & Security',
      items: [
        {
          'Search Engines': [
            'about/BraveSearch',
            'about/DuckDuckGo',
          ],
        },
        {
          'VPN': [
            'about/NordVPN',
            'about/ProtonVPN',
          ]
        },
        {
          'Password Manager': [
            'about/BitWarden',
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Cryptocurrency & Stocks',
      items: [
        {
          'Market Tracking': [
            'about/TradingView',
          ],
        },
        {
          'Stock Exchanges': [
            'about/Stake',
          ],
        },
        {
          'Crypto Exchanges': [ 
            'about/Kraken',
            'about/Gemini',
            'about/Binance',
          ],
        },
        {
          'Crypto Wallets': [
            'about/Ledger',
            'about/Yoroi',
            'about/MyEtherWallet',
            'about/Solar',
        ],
        },
      ],
    },
  ],
  guides: [
    'guides/Welcome', 
    {
      type: 'category',
      label: 'Software',
      items: [
        'guides/Kubuntu',
      ],
    },
    {
      type: 'category',
      label: 'Online Infrastructure',
      items: [
        'guides/Nextcloud',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'guides/MalwareScan',
      ],
    },
  ],
};
