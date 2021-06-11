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
            'about/InvoiceNinja',
            'about/VSCode',
            'about/Skiff',
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
            'about/Nextcloud',
            'about/RealVNC',
            'about/VirtualBox',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Service Providers',
      items: [
        {
          'Hosting': [ 
            'about/DreamHost',
            'about/Cloudflare', 
            'about/GitHub', 
            'about/Vercel',
            'about/UnstoppableDomains',
          ],
        },
        {
          'Search Engines': [
            'about/DuckDuckGo',
            'about/BraveSearch',
        ],
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
            'about/CoinSpot',
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
        'guides/Brave',
        'guides/Signal',
        'guides/LibreOffice', 
        'guides/Joplin', 
        'guides/VSCode',
        'guides/Krita',
        'guides/Tinkercad',
        'guides/Cura',
        'guides/Kubuntu',
        'guides/GrapheneOS',
      ],
    },
    {
      type: 'category',
      label: 'Online Infrastructure',
      items: [
        'guides/DreamHost',
        'guides/Cloudflare',
        'guides/Tutanota',
        'guides/Vercel',
        'guides/Nextcloud',
        'guides/InvoiceNinja',
        'guides/UnstoppableDomains',
      ],
    },
    {
      type: 'category',
      label: 'Crypto & Stocks',
      items: [
        'guides/Binance',
        'guides/Stake',
        'guides/Ledger',
        'guides/Yoroi',
        'guides/MyEtherWallet',
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
