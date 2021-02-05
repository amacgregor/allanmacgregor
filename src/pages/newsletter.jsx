import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import MobileNav from '../components/MobileNav'
import CTASimple from '../components/Tailwind/CTASimple'
import NewsletterForm from '../components/NewsletterForm'

class NewsletterRoute extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const page = this.props.data.mdx
    const { title: pageTitle, description: pageDescription } = page.frontmatter
    const description = pageDescription !== null ? pageDescription : subtitle
    const cta_content = {
      title: "Hi! I'm Allan",
      subtitle: 'This is where I write.',
    }
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
          <div className="max-w-screen-lg ">
            <MobileNav {...this.props} />
            <div className="h-screen flex overflow-hidden">
              <Sidebar {...this.props} />
              <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
                <NewsletterForm />
              </main>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NewsletterRoute

export const pageQuery = graphql`
  query NewsletterPageQuery {
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
