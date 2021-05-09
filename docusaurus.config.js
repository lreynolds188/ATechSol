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
          href: 'https://thereynolds.com.au',
          label: 'Team',
          position: 'left',
        },
        {
          to: 'docs/Automation',
          activeBasePath: 'docs',
          label: 'Services',
          position: 'left',
        },
        {
          href: 'mailto:luke@automatedtechnicalsolutions.com',
          label: 'Contact',
          position: 'left',
        },
        {
          to: 'docs/Donate',
          activeBasePath: 'docs',
          label: 'Donate',
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
              label: 'Terms of Service',
              to: 'docs/Terms of Service',
              activeBasePath: 'docs',
            },
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
