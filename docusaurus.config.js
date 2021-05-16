/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Vector Monkeys Coding Dojo',
  tagline: 'The tagline of my site',
  url: 'https://www.vectormonkeys.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'EliasRut', // Usually your GitHub org/user name.
  projectName: 'Vector-Monkeys-Coding-Dojo', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Vector Monkey Head',
        src: 'img/vectormonkey.png',
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
        {to: 'monkeys', label: 'Meet the monkeys', position: 'left'},
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
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Projects',
              to: 'projects',
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
            'https://github.com/EliasRut/Vector-Monkeys-Coding-Dojo/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/EliasRut/Vector-Monkeys-Coding-Dojo/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
