import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import HomePageTemplateDetails from '../components/HomePageTemplateDetails'

class IndexRoute extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const page = this.props.data.mdx
    const { title: pageTitle, description: pageDescription } = page.frontmatter
    const description = pageDescription !== null ? pageDescription : subtitle

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${pageTitle} - ${title}`}</title>
            <meta name="description" content={description} />
            <script
              src="https://kit.fontawesome.com/9a1f3c9439.js"
              crossorigin="anonymous"
            ></script>
          </Helmet>
          <HomePageTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          twitter
          github
          youtube
          rss
          linkedin
        }
      }
    }
    mdx(fields: { slug: { eq: "/home" } }) {
      id
      body
      frontmatter {
        title
        date
        description
      }
    }
    allMdx(
      limit: 6
      filter: { frontmatter: { draft: { ne: true }, layout: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            tagSlugs
            slug
            categorySlug
          }
          excerpt(pruneLength: 200)
          timeToRead
          frontmatter {
            title
            tags
            date
            category
            description
          }
        }
      }
    }
    githubViewer {
      repositories {
        nodes {
          name
          description
          languages {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
    allAirtable(
      filter: { table: { eq: "Main" }, data: { Enabled: { eq: true } } }
    ) {
      nodes {
        data {
          Name
          Logo {
            url
          }
          Enabled
          Description
          Tagline
          Url
          Categories
        }
      }
    }
  }
`
