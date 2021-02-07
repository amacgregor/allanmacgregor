import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostTemplateDetails from '../components/PostTemplateDetails'
import { MDXRenderer } from 'gatsby-plugin-mdx'

class JournalTemplate extends React.Component {
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
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:image"
              content={`${this.props.data.site.siteMetadata.siteUrl}${page.fields.slug}/twitter-card.jpg`}
            />
            <script
              src="https://kit.fontawesome.com/9a1f3c9439.js"
              crossorigin="anonymous"
            ></script>
          </Helmet>
          <PostTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default JournalTemplate

export const pageQuery = graphql`
  query JournalBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        siteUrl
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
      tableOfContents
      frontmatter {
        title
        tags
        status
        confidence
        date
        description
        abstract
      }
    }
  }
`
