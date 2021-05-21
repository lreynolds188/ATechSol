module.exports = {
  docs: [
    'Welcome',
    {
      type: 'category',
      label: 'Open Source Software',
      items: [
        {
          'Desktop OS': [
            'open-source-software/desktop-os/Kubuntu', 
          ],
        },
        {
          'Mobile OS': [
            'open-source-software/mobile-os/GrapheneOS', 
            'open-source-software/mobile-os/UbuntuTouch',
          ],
        },
        {
          'Web Browser': [
            'open-source-software/web-browser/Brave',
          ],
        },
        {
          'Office': [
            'open-source-software/office/LibreOffice', 
            'open-source-software/office/Joplin', 
            'open-source-software/office/InvoiceNinja',
          ],
        },
        {
          'Cloud': [
            'open-source-software/cloud/Nextcloud',
          ],
        },
        {
          '3D Printing': [
            'open-source-software/3d-printing/Tinkercad', 
            'open-source-software/3d-printing/Cura',
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
        {
          'Exchange': [
            'cryptocurrency/exchange/Binance', 
            'cryptocurrency/exchange/Coinbase',
          ],
        },
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
