module.exports = {
  title: 'Automated Tech Solutions',
  tagline: 'We solve problems and show you how',
  url: 'https://automatedtechnicalsolutions.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Automated Tech Solutions', // Usually your GitHub org/user name.
  projectName: 'Automated Tech Solutions', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ATS',
      logo: {
        alt: 'Automated Tech Solutions',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/Welcome',
          activeBasePath: 'docs',
          label: 'Guides',
          position: 'left',
        },
        {
          href: 'https://thereynolds.com.au',
          label: 'Team',
          position: 'left',
        },
        {
          href: 'https://thereynolds.com.au/resume',
          label: 'Contact',
          position: 'left',
        },
        {
          href: 'https://github.com/lreynolds188',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Privacy Policy',
              to: 'docs/Privacy Policy',
            },
            {
              label: 'Disclaimer',
              to: 'docs/Disclaimer',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Automated Tech Solutions, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/lreynolds188/ATS/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
