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
      'Software Engineer, Author, Technology Enthusiast, and Flow-based Programming Advocate.',
    copyright: '© All rights reserved.',
    disqusShortname: '',
    menu: [
      {
        label: 'Start Here',
        path: '/',
      },
      {
        label: 'Short Form',
        path: '/blog'
      },
      {
        label: 'Long Form',
        path: 'https://amgr.dev',
      },
      {
        label: 'Publications',
        path: '/publications/',
      },
      {
        label: 'Resume',
        path: '/resume/',
      },
      {
        label: 'Contact me',
        path: '/contact/',
      },
    ],
    author: {
      name: 'Allan MacGregor',
      email: 'info@allanmacgregor.com',
      telegram: '#',
      twitter: 'allanmacgregor',
      github: 'amacgregor',
      rss: '#',
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
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                url
                title
                description: subtitle
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.url + edge.node.fields.slug,
                  guid: site.siteMetadata.url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        layout
                        draft
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
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
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-73379983-2' },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto:400,400i,500,700'],
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
