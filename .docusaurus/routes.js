
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','683'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','79c'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','597'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','7e7'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','240'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','466'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','5db'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','7dd'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','592'),
  exact: true,
},
{
  path: '/mission-statement',
  component: ComponentCreator('/mission-statement','d62'),
  exact: true,
},
{
  path: '/monkeys',
  component: ComponentCreator('/monkeys','31d'),
  exact: true,
},
{
  path: '/projects',
  component: ComponentCreator('/projects','51a'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','fd5'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','929'),
  exact: true,
},
{
  path: '/docs/distant-stars-bridge-control',
  component: ComponentCreator('/docs/distant-stars-bridge-control','d41'),
  exact: true,
},
{
  path: '/docs/distant-stars-introduction',
  component: ComponentCreator('/docs/distant-stars-introduction','8fc'),
  exact: true,
},
{
  path: '/docs/distant-stars-life-support',
  component: ComponentCreator('/docs/distant-stars-life-support','d0a'),
  exact: true,
},
{
  path: '/docs/distant-stars-main-reactor',
  component: ComponentCreator('/docs/distant-stars-main-reactor','dc3'),
  exact: true,
},
{
  path: '/docs/distant-stars-story',
  component: ComponentCreator('/docs/distant-stars-story','6dd'),
  exact: true,
},
{
  path: '/docs/javascript-basics',
  component: ComponentCreator('/docs/javascript-basics','4a4'),
  exact: true,
},
{
  path: '/docs/markdown-features',
  component: ComponentCreator('/docs/markdown-features','f04'),
  exact: true,
},
{
  path: '/docs/next-steps',
  component: ComponentCreator('/docs/next-steps','e83'),
  exact: true,
},
{
  path: '/docs/step-by-step-guide',
  component: ComponentCreator('/docs/step-by-step-guide','988'),
  exact: true,
},
{
  path: '/docs/typescript-basics',
  component: ComponentCreator('/docs/typescript-basics','cbd'),
  exact: true,
},
{
  path: '/docs/webdesign-basics',
  component: ComponentCreator('/docs/webdesign-basics','aa9'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
