const lost = require('lost')
const pxtorem = require('postcss-pxtorem')

const url = 'https://allanmacgregor.com'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    url,
    siteUrl: url,
    title: 'Allan MacGregor',
    description:
      "Hi, I'm Allan, this is where I write. I'm an experienced software engineer and manager, currently looking for my next opportunity. I also run several side projects under the umbrella of Bloccs.io",
    subtitle:
      'Expert Software Engineer and Manager • Writer • Functional Programming Advocate',
    copyright: 'Copyright Allan MacGregor © 2020',
    disqusShortname: '',
    menu: [
      {
        label: 'Start Here',
        path: '/',
      },
      {
        label: 'Blog',
        path: '/blog',
      },
      {
        label: 'TIL',
        path: '/til',
      },
      {
        label: 'About me',
        path: '/about',
      },
      {
        label: 'Digital Garden',
        path: 'https://publish.obsidian.md/allanmacgregor/',
      },
      {
        label: 'Stack Overflow',
        path: 'https://stackoverflow.com/users/801506/allan-macgregor',
      },
      // {
      //   label: 'Long Form',
      //   path: '/essays',
      // },
      // {
      //   label: 'Publications',
      //   path: '/publications/',
      // },
      // {
      //   label: 'Resume',
      //   path: '/resume/',
      // },
      // {
      //   label: 'Contact me',
      //   path: '/contact/',
      // },
    ],
    author: {
      name: 'Allan MacGregor',
      email: 'info@allanmacgregor.com',
      telegram: '#',
      twitter: 'allanmacgregor',
      github: 'amacgregor',
      rss: 'https://allanmacgregor.com/rss.xml',
      youtube: 'UCqcJE6lxT_vzGGSaUCy2efA',
      vk: '#',
      linkedin: 'allanmacgregor',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://allanmacgregor.com',
        sitemap: 'https://allanmacgregor.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `allanmacgregor.com`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              username: 'amacgregor',
              includeDefaultCss: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumuers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-custom-blocks`,
            options: {
              blocks: {
                snippet: {
                  classes: `snippet`,
                },
              },
            },
          },
          `gatsby-plugin-remove-trailing-slashes`,
          `gatsby-remark-reading-time`,
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: `gatsby-remark-social-cards-for-plugin-mdx`,
            options: {
              title: {
                // This is the frontmatter field the title should come from
                field: 'title',
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: 'DejaVuSansCondensed',
                color: 'white', // black|white
                size: 48, // 16|24|32|48|64
                style: 'bold', // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to yMargin
              },
              meta: {
                // The parts array is what generates the bottom text
                // Pass an array with strings and objects
                // The following array will generate:
                // "- Author Name » September 13"
                // The objects are used to pull data from your markdown's
                // frontmatter. { field: "author" } pulls the author set
                // in the frontmatter. { field: "category" } would pull
                // the category set. Any field can be used as parts
                // Note: Only pass the "format" property on date fields
                parts: [
                  '- ',
                  { field: 'author' },
                  ' » ',
                  { field: 'date', format: 'mmmm dS' },
                ],
                // Currently only supports DejaVuSansCondensed
                // More fonts coming soon!
                font: 'DejaVuSansCondensed',
                color: 'white', // black|white
                size: 24, // 16|24|32|48|64
                style: 'normal', // normal|bold|italic
                x: null, // Will default to xMargin
                y: null, // Will default to cardHeight - yMargin - size
              },
              background: '#42389d', // Background color for the card
              xMargin: 24, // Edge margin used when x value is not set
              yMargin: 24, // Edge margin used when y value is not set
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-11372057-1' },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto:400,400i,500,700',
          'Merriweather:400,400i,500,700',
          'Open Sans:400,400i,500,700',
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss')('./tailwind.config.js'),
          lost(),
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Allan's Feed",
            match: '^/posts/',
          },
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: "Allan's Feed",
            match: '^/posts/',
          },
        ],
      },
    },
    {
      resolve: '@dschau/gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `query getLatestRepositories{
            viewer { 
              repositories(first: 4, privacy: PUBLIC, isLocked:false, isFork: false, ownerAffiliations:OWNER, orderBy: {field: CREATED_AT, direction: DESC}){
                nodes {
                  id
                  name
                  description
                  descriptionHTML
                  forkCount
                  homepageUrl
                  languages(first:1) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              }
            }
          }`,
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `app2VUGGs2kEZDzfu`,
            tableName: `Main`,
            queryName: 'ActiveProjects',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://allanmacgregor.com`,
        stripQueryString: true,
        noTrailingSlash: true
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Allan MacGregor`,
    //     short_name: `allanmacgregor.com`,
    //     start_url: `/`,
    //     background_color: `#42389d`,
    //     theme_color: `#161e2e`,
    //     display: `standalone`,
    //     icon: `src/assets/images/favicon-16x16.png`, // This path is relative to the root of the site.
    //     icons: [
    //       {
    //         src: `src/assets/images/favicon-32x32.png`,
    //         sizes: `32x32`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `src/assets/images/favicon-96x96.png`,
    //         sizes: `96x96`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true, // Print removed selectors and processed file names
    //     develop: false, // Enable while using `gatsby develop`
    //     tailwind: true, // Enable tailwindcss support
    //     whitelist: ['p-4','italic'], // Don't remove this selector
    //     ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
    //     // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
    //   }
    // }
  ],
}
