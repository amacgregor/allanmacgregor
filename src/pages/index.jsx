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
        <div className="fullHeightContainer">
          <Helmet>
            <title>{`${pageTitle} - ${title}`}</title>
            <meta name="description" content={description} />
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
          telegram
          twitter
          github
          youtube
          rss
          linkedin
          vk
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
    githubViewer { 
      repositories{
        nodes {
          name
          description
          languages{
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`
