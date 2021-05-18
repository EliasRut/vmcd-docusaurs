/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Vector Monkeys Coding Dojo',
  tagline: 'A community for coding enthusiasts of all backgrounds',
  url: 'https://www.vectormonkeys.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EliasRut', // Usually your GitHub org/user name.
  projectName: 'vmcd-docusaurs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Vector Monkey Head',
        src: 'img/vectormonkey_black.png',
        srcDark: 'img/vectormonkey_white.png'
      },
      items: [
        {to: 'mission-statement/', label: 'Mission Statement', position: 'left'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Course Material',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'projects', label: 'Projects', position: 'left'},
        // {to: 'monkeys', label: 'Meet the monkeys', position: 'left'},
        {
          href: 'https://github.com/EliasRut/Vector-Monkeys-Coding-Dojo',
          label: 'GitHub',
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
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Narrated Exercises',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/8VsPfKu8UY',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Impressum',
              to: 'impressum',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/EliasRut',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Elias Rut, Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/EliasRut/vmcd-docusaurs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/EliasRut/vmcd-docusaurs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
