import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTemplateDetails from '../components/PageTemplateDetails'

class PageTemplate extends React.Component {
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
          <PageTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        date
        description
      }
    }
  }
`
