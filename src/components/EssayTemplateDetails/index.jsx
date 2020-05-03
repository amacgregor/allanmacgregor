import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Disqus from '../Disqus/Disqus'
import EssayMetadata from '../EssayMetadata'
import Sidebar from '../Sidebar'
import MobileNav from '../MobileNav'
import TOC from '../TOC'
import PostHeading from '../Tailwind/PostHeading'
import { MDXRenderer } from "gatsby-plugin-mdx"

class EssayTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata
    const essay = this.props.data.mdx
    const tags = essay.fields.tagSlugs
    const essay_content = {
      title: essay.frontmatter.title,
      subtitle: essay.frontmatter.description
    }

    const tagsBlock = (
      <div className="essay-single__tags">
        <ul className="essay-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="essay-single__tags-list-item" key={tag}>
                <Link to={tag} className="essay-single__tags-list-item-link">
                  {essay.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    return (
      <div>
      <MobileNav {...this.props} />

      <div className="h-screen flex overflow-hidden bg-white">
        <Sidebar {...this.props} />
        <main class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
          <PostHeading { ... essay_content } />

          <div className="max-w-screen-lg bg-white pt-0 pb-5 px-4 my-0 sm:px-6 lg:pt-5 lg:pb-5 lg:px-5 mx-8">
            <div className="metadata-container">
                <EssayMetadata updated_at={essay.fields.modifiedTime} abstract={ essay.frontmatter.abstract} tags={essay.frontmatter.tags}  created_at={essay.frontmatter.date} confidence={essay.frontmatter.confidence} status={essay.frontmatter.status} />
            </div>
            <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-6 lg:col-gap-5 lg:row-gap-12">
              <div className="lg:col-span-2" id="TOC"><TOC item={essay.tableOfContents} level={0} maxDepth={3}/> </div>
              <div className="lg:col-span-4">
                <h2>Abtract</h2>
                {essay.frontmatter.abstract}</div>
            </div>
            <MDXRenderer>{essay.body}</MDXRenderer>
          </div> 
          <div className="max-w-screen-lg bg-white pt-0 pb-5 px-4 my-0 sm:px-6 lg:pt-5 lg:pb-5 lg:px-5 mx-8">
            <hr />
            <p className="essay-single__footer-text">
              {subtitle}
              <a
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br /> <strong>{author.name}</strong> on Twitter
              </a>
            </p>
          </div>
        </main>
      </div>
      </div>
    )
  }
}

export default EssayTemplateDetails
