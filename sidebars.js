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
            'about/Joplin',
            'about/Skiff',
            'about/InvoiceNinja',
            'about/UVdesk',
          ],
        },
        {
          '2D/3D Modeling': [
            'about/Krita',
            'about/Thingiverse',
            'about/Tinkercad',
            'about/Cura',
          ],
        },
        {
          'Development': [
            'about/VSCode',
            'about/Focalboard',
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
          'Server & Maintenance': [
            'about/VirtualBox',
            'about/UbuntuServer',
            'about/Nextcloud',
            'about/RealVNC',
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
            'about/NetRegistry',
            'about/Cloudflare', 
            'about/GitHub', 
            'about/Vercel',
            'about/UnstoppableDomains',
          ],
        },
        {
          'Search Engines': [
            'about/BraveSearch',
            'about/DuckDuckGo',
          ],
        },
        {
          'Payment Systems': [
            'about/Square',
            'about/Stripe',
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
          ],
        },
        {
          'Crypto Wallets': [
            'about/Ledger',
            'about/Yoroi',
            'about/MyEtherWallet',
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
      label: 'Security',
      items: [
        'guides/MalwareScan',
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
      label: 'Crypto & Stocks',
      items: [
        'guides/Ledger',
      ],
    },
  ],
  services: [
    'services/Implementation',
    'services/Information',
    'services/Support',
    'services/Automation',
  ]
};
