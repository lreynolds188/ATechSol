module.exports = {
  title: 'ATechSol',
  tagline: 'Open source and privacy based solutions',
  url: 'https://atechsol.com.au',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ATechSol', // Usually your GitHub org/user name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      logo: {
        alt: 'ATechSol',
        src: 'img/favicon.ico',
      },
      links: [
        {
          label: 'Solutions',
          to: 'docs/about/Welcome',
          position: 'left',
        },
        {
          label: 'Guides',
          to: 'docs/guides/Welcome',
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
              to: 'docs/legal/PrivacyPolicy',
            },
            {
              label: 'Disclaimer',
              to: 'docs/legal/Disclaimer',
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
      copyright: `Copyright © ${new Date().getFullYear()} ATechSol`,
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
