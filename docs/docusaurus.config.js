// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Next.js Boilerplate',
  tagline: 'Basic Next.js boilerplate ready to use in any type of websites.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'matheusAlvarenga', // Usually your GitHub org/user name.
  projectName: 'next-boilerplate', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/matheusAlvarenga/next-boilerplate/tree/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Next.js Boilerplate',
        logo: {
          alt: 'Next.js Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Features',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Folders and Structure',
          },
          {
            href: 'https://github.com/matheusAlvarenga/next-boilerplate',
            position: 'left',
            label: 'Integration Tutorials',
          },
          {
            href: 'https://github.com/matheusAlvarenga/next-boilerplate',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/matheus-alvarenga-de-oliveira/',
            label: 'Author',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Features',
                to: '/features/intro',
              },
              {
                label: 'Folders and Structure',
                to: '/structure/intro',
              },
              {
                label: 'Integration Tutorials',
                to: 'https://github.com/matheusAlvarenga/next-boilerplate',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/matheusAlvarenga/next-boilerplate',
              },
              {
                label: 'Author',
                href: 'https://www.linkedin.com/in/matheus-alvarenga-de-oliveira/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matheus Alvarenga de Oliveira. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
