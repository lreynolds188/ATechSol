module.exports = {
  docs: [
    'Welcome',
    {
      type: 'category',
      label: 'Open Source Software',
      items: [
        'open-source-software/desktop-os',
        {
          'Desktop OS': [
            'desktop-os/Kubuntu', 
            'desktop-os/GrapheneOS', 
            'desktop-os/UbuntuTouch', 
            'desktop-os/Brave', 
            'desktop-os/LibreOffice', 
            'desktop-os/Nextcloud', 
            'desktop-os/Joplin', 
            'desktop-os/InvoiceNinja',
          ],
          'Mobile OS': [
            'mobile-os/GrapheneOS', 
            'mobile-os/UbuntuTouch',
          ],
          'Web Browser': [
            'web-browser/Brave',
          ],
          'Cloud': [
            'cloud/Nextcloud',
          ],
          'Office': [
            'office/LibreOffice', 
            'office/Joplin', 
            'office/InvoiceNinja',
          ],
          '3D Printing': [
            '3d-printing/Tinkercad', 
            '3d-printing/Cura',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Service Providers',
      items: ['DreamHost', 'Cloudflare', 'GitHub', 'Vercel'],
    },
    {
      type: 'category',
      label: 'Cryptocurrency',
      items: [
        'Exchange': [
          'exchange/Binance', 
          'exchange/Coinbase',
      ],
    },
    {
      type: 'category',
      label: 'Our Services',
      items: ['Implementation', 'Information', 'Automation'],
    },
    'Donate',
  ],
  guides: [
    {
      type: 'category',
      label: 'Guides',
      items: ['Guides', 'NextcloudGuide', 'GrapheneOSGuide', 'JoplinGuide', 'LibreOfficeGuide', 'VercelGuide'],
    },
  ]
};
