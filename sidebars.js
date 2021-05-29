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
          'Cloud Server': [
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
            'about/DreamHost', 
            'about/Cloudflare', 
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
      items: ['about/Implementation', 'about/Information', 'about/Automation'],
    },
    'about/Donate',
  ],
  guides: [
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/Welcome', 
        'guides/NextcloudGuide', 
        'guides/GrapheneOSGuide', 
        'guides/JoplinGuide', 
        'guides/LibreOfficeGuide', 
        'guides/VercelGuide'
      ],
    },
  ]
};
