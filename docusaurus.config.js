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
          label: 'About',
          to: 'docs/about/Welcome',
          position: 'left',
        },
        {
          label: 'Guides',
          to: 'docs/guides/Welcome',
          position: 'left',
        },
        {
          label: 'Services',
          to: 'docs/about/Implementation',
          position: 'left',
        },
        {
          label: 'Team',
          href: 'https://thereynolds.com.au',
          position: 'left',
        },
        {
          label: 'Contact',
          to: 'docs/about/Contact',
          position: 'left',
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
              to: 'docs/about/PrivacyPolicy',
            },
            {
              label: 'Disclaimer',
              to: 'docs/about/Disclaimer',
            },
            {
              label: 'Donate',
              to: 'docs/about/Donate',
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
