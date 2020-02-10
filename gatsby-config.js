const lost = require('lost')
const pxtorem = require('postcss-pxtorem')

const url = 'https://allanmacgregor.com'

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    url,
    siteUrl: url,
    title: 'Allan MacGregor',
    subtitle:
      'Director of Engineering at Hopper • Writer • Functional Programming Advocate',
    copyright: 'Copyright Allan MacGregor © 2019',
    disqusShortname: '',
    menu: [
      {
        label: 'Start Here',
        path: '/',
      },
      {
        label: 'Blog',
        path: '/blog'
      },
      {
        label: 'Long Form',
        path: 'https://amgr.dev',
      },
      {
        label: 'Stack Overflow',
        path: 'https://stackoverflow.com/users/801506/allan-macgregor'
      }
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
      rss: '#',
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
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:
    
              // the github handler whose gists are to be accessed
              username: 'amacgregor',
    
              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ]
      },
    },
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             url
    //             title
    //             description: subtitle
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) =>
    //           allMarkdownRemark.edges.map(edge =>
    //             Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.frontmatter.description,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.url + edge.node.fields.slug,
    //               guid: site.siteMetadata.url + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': edge.node.html }],
    //             })
    //           ),
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               limit: 1000,
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //               filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    //             ) {
    //               edges {
    //                 node {
    //                   html
    //                   fields {
    //                     slug
    //                   }
    //                   frontmatter {
    //                     title
    //                     date
    //                     layout
    //                     draft
    //                     description
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //       },
    //     ],
    //   },
    // },
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
          'Open Sans:400,400i,500,700'
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
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
  ],
}
