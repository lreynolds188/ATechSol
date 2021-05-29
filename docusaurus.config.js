module.exports = {
  title: 'Automated Tech Solutions',
  tagline: 'We solve problems and show you how',
  url: 'https://automatedtechnicalsolutions.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Automated Tech Solutions', // Usually your GitHub org/user name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'ATS',
      logo: {
        alt: 'Automated Tech Solutions',
        src: 'img/favicon.ico',
      },
      links: [
        {
          to: 'docs/about/Welcome',
          label: 'About',
          position: 'left',
        },
        {
          to: 'about/Guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'about/Implementation',
          label: 'Services',
          position: 'left',
        },
        {
          href: 'https://thereynolds.com.au',
          label: 'Team',
          position: 'left',
        },
        {
          to: 'about/Contact',
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
              to: 'about/PrivacyPolicy',
              activeBasePath: 'docs',
            },
            {
              label: 'Disclaimer',
              to: 'about/Disclaimer',
              activeBasePath: 'docs',
            },
            {
              label: 'Donate',
              to: 'about/Donate',
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
