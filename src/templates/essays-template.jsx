import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import RecentPublications from '../components/Tailwind/PageSection/RecentPublications'

import { Link } from 'gatsby'

class EssaysRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMdx.edges
    posts.forEach(post => {
      items.push(<Post data={post} key={post.node.fields.slug} />)
    })

    const publication = {
      title: "Long Form",
      subtext: "Long-term content which is intended to improve over time, and is meant to be more of a research and exploration section. Content in this section intentionally explores the rabbit-holes within a particular subject or topics." 
    }

    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/essays/" : "/essays/" + (currentPage - 1).toString()
    const nextPage = "/essays/" +(currentPage + 1).toString()

    return (
      <Layout>
      <div className="h-screen flex overflow-hidden bg-white">
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
            <script src="https://kit.fontawesome.com/9a1f3c9439.js" crossorigin="anonymous"></script>
          </Helmet>
          <Sidebar {...this.props} />
          <main className="overflow-y-auto">
            <div className="relative bg-white pt-0 pb-5 px-4 my-0 sm:px-6 lg:pt-5 lg:pb-5 lg:px-5 mx-8">
                {!isFirst && (
                  <Link className="absolute inset-y-0 left-0 w-18 m-5" to={prevPage} rel="prev">
                    ← Previous Page
                  </Link>
                )}
                {!isLast && (
                  <Link className="absolute inset-y-0 right-0 w-18 m-5" to={nextPage} rel="next">
                    Next Page →
                  </Link>
                )}
              </div>
            <RecentPublications title={publication.title} subtext={publication.subtext} { ... this.props }/> 
          </main>
</div>

      </Layout>
    )
  }
}

export default EssaysRoute

export const pageQuery = graphql`
  query EssayQuery($skip: Int!, $limit: Int!) {
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
      filter: { frontmatter: { layout: { eq: "essay" }, draft: { ne: true } } }
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
