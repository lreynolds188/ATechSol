module.exports = {
  docs: [
    'about/Welcome',
    {
      type: 'category',
      label: 'Open Source Software',
      items: [
        {
          'Web Browsers': [
            'about/Firefox',
          ],
        },
        {
          'Communications': [
            'about/Signal',
            'about/Protonmail',
          ],
        },
        {
          'Office Tools': [
            'about/LibreOffice', 
            'about/InvoiceNinja',
            'about/UVdesk',
          ],
        },
        {
          '2D/3D Modeling': [
            'about/Krita',
            'about/Blender',
            'about/Thingiverse',
            'about/Tinkercad',
            'about/Cura',
          ],
        },
        {
          'Development': [
            'about/VSCode',
            'about/Focalboard',
            'about/Mattermost',
          ],
        },
        {
          'Desktop Operating Systems': [
            'about/Debian',
          ],
        },
        {
          'Mobile Operating Systems': [
            'about/GrapheneOS',
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
                'about/Debian',
              ]
            },
            {
              'Services': [
                'about/Nextcloud',
                'about/Jellyfin',
                'about/Pi-hole',
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
            'about/Square',
            'about/Zeller',
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
            'about/DuckDuckGo',
          ],
        },
        {
          'VPN': [
            'about/ProtonVPN',
          ]
        },
        {
          'Password Manager': [
            'about/Bitwarden',
          ],
        },
        {
          '2-Factor Authentication': [
            'about/YubiKey',
            'about/FreeOTP',
          ],
        },
        {
          'Remote Access': {
            'about/RealVNC',
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
            'about/Binance',
          ],
        },
        {
          'Crypto Wallets': [
            'about/Ledger',
            'about/MyEtherWallet',
            'about/Yoroi',
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
        'guides/Debian',
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
        'guides/YubiKeyManager',
      ],
    },
  ],
};
