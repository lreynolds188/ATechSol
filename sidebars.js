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
            'about/VSCode',
            'about/Krita',
            'about/InvoiceNinja',
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
            'about/Cloudflare', 
            'about/DreamHost',
            'about/GitHub', 
            'about/Vercel',
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
      label: '3D Printing',
      items: [
        'about/Thingiverse',
        'about/Tinkercad',
        'about/Cura',
      ],
    },
    {
      type: 'category',
      label: 'Cryptocurrency & Stocks',
      items: [
        {
          'Exchanges': [ 
            'about/Binance',
            'about/Coinspot', 
            'about/Stake',
          ],
        },
        {
          'Wallets': [
            'about/Ledger',
            'about/Yoroi',
            'about/MyEtherWallet',
        ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Our Services',
      items: [
        'about/Implementation', 
        'about/InformationSecurity', 
        'about/Support', 
        'about/Automation',
      ],
    },
    'about/Contact',
    'about/Donate',
  ],
  guides: [
    'guides/Welcome', 
    {
      type: 'category',
      label: 'Software',
      items: [
        'guides/Brave',
        'guides/LibreOffice', 
        'guides/Signal',
        'guides/Joplin', 
        'guides/Krita',
        'guides/VSCode',
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
        'guides/InvoiceNinja',
        'guides/Nextcloud',
        'guides/Vercel',
      ],
    },
    {
      type: 'category',
      label: '3D Printing',
      items: [
        'guides/Tinkercad',
        'guides/Cura',
      ],
    },
    {
      type: 'category',
      label: 'Crypto & Stocks',
      items: [
        'guides/Binance',
        'guides/Stake',
        'guides/UnstoppableDomains',
        'guides/Ledger',
        'guides/Yoroi',
        'guides/MyEtherWallet',
      ],
    },
  ],
};
