module.exports = {
  title: 'Atechsol',
  tagline: 'We solve problems and show you how',
  url: 'https://atechsol.com.au',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Atechsol', // Usually your GitHub org/user name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'ATECHSOL',
      logo: {
        alt: 'ATECHSOL',
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
        {
          label: 'Donate',
          to: 'docs/about/Donate',
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
              label: 'Contact',
              to: 'docs/about/Contact',
            },
            {
              label: 'Donate',
              to: 'docs/about/Donate',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Atechsol`,
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
