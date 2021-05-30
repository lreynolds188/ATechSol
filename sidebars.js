module.exports = {
  docs: [
    'about/Welcome',
    {
      type: 'category',
      label: 'Open Source Software',
      items: [
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
          'Self-Hosted Cloud': [
            'about/Nextcloud',
          ],
        },
        {
          '3D Printing': [
            'about/Tinkercad',
            'about/Cura',
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
      label: 'Our Services',
      items: ['about/Implementation', 'about/InformationSecurity', 'about/Automation'],
    },
    'about/Donate',
  ],
  guides: [
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/Welcome', 
        'guides/Nextcloud', 
        'guides/GrapheneOS', 
        'guides/Joplin', 
        'guides/LibreOffice', 
        'guides/Vercel'
      ],
    },
  ]
};
