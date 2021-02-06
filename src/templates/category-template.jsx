import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import RecentPublications from '../components/Tailwind/PageSection/RecentPublications'

class CategoryTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const { category } = this.props.pageContext
    const { toLaxTitleCase } = require('titlecase')

    return (
      <Layout>
        <div className="lg:h-screen lg:flex lg:overflow-hidden bg-white">
          <Helmet title={`${category} - ${title}`} />
          <Sidebar {...this.props} />
          <main className="overflow-y-auto">
            <RecentPublications
                title={toLaxTitleCase(category)}
                subtext={''}
                {...this.props}
              />
          </main>
        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryPage($category: String) {
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
    allMdx(
      limit: 1000
      filter: {
        frontmatter: {
          category: { eq: $category }
          layout: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          excerpt(pruneLength: 200)
          timeToRead
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
