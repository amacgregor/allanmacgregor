import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import RecentPublications from '../components/Tailwind/PageSection/RecentPublications'

import { Link } from 'gatsby'

class BlogRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMdx.edges
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />)
    })

    const publication = {
      title: "Recent publications",
      subtext: "Recent articles, videos and other content on software engineering and technology."
    }

    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/blog/" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/" +(currentPage + 1).toString()

    return (
      <Layout>
      <div className="h-screen flex overflow-hidden bg-white">
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
            <script src="https://kit.fontawesome.com/9a1f3c9439.js" crossorigin="anonymous"></script>
          </Helmet>
          <Sidebar {...this.props} />
          <div className="h-screen flex overflow-hidden bg-white">
                {!isFirst && (
                  <Link to={prevPage} rel="prev">
                    ← Previous Page
                  </Link>
                )}
                {!isLast && (
                  <Link to={nextPage} rel="next">
                    Next Page →
                  </Link>
                )}
              </div>
          </div>
          <RecentPublications title={publication.title} subtext={publication.subtext} { ... this.props }/> 

      </Layout>
    )
  }
}

export default BlogRoute

export const pageQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
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
      limit: $limit
      skip: $skip
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
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
