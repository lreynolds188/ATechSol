module.exports = {
  title: 'Automated Tech Solutions',
  tagline: 'We solve problems and show you how',
  url: 'https://automatedtechnicalsolutions.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ATS', // Usually your GitHub org/user name.
  projectName: 'Automated Tech Solutions', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ATS',
      logo: {
        alt: 'Automated Tech Solutions',
        src: 'img/favicon.ico',
      },
      links: [
        {
          to: 'docs/Welcome',
          activeBasePath: 'docs',
          label: 'Info',
          position: 'left',
        },
        {
          to: 'docs/Guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/Implementation',
          activeBasePath: 'docs',
          label: 'Services',
          position: 'left',
        },
        {
          href: 'https://thereynolds.com.au',
          label: 'Team',
          position: 'left',
        },
        {
          href: 'docs/Contact',
          activeBasePath: 'docs',
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
              activeBasePath: 'docs',
            },
            {
              label: 'Disclaimer',
              to: 'docs/Disclaimer',
              activeBasePath: 'docs',
            },
            {
              label: 'Donate',
              to: 'docs/Donate',
              activeBasePath: 'docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Automated Tech Solutions`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
