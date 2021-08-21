export default {
  "title": "Vector Monkeys Coding Dojo",
  "tagline": "A community for coding enthusiasts of all backgrounds",
  "url": "https://www.vectormonkeys.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "EliasRut",
  "projectName": "vmcd-docusaurs",
  "themeConfig": {
    "navbar": {
      "title": "Home",
      "logo": {
        "alt": "Vector Monkey Head",
        "src": "img/vectormonkey_black.png",
        "srcDark": "img/vectormonkey_white.png"
      },
      "items": [
        {
          "to": "mission-statement/",
          "label": "Mission Statement",
          "position": "left"
        },
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Course Material",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "projects",
          "label": "Projects",
          "position": "left"
        },
        {
          "href": "https://github.com/EliasRut/Vector-Monkeys-Coding-Dojo",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/"
            },
            {
              "label": "Narrated Exercises",
              "to": "docs/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.gg/8VsPfKu8UY"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Impressum",
              "to": "impressum"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/EliasRut"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Elias Rut, Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/ella/Code/vmcd-docusaurs/sidebars.js"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/home/ella/Code/vmcd-docusaurs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};