import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Disqus from '../Disqus/Disqus'
import Sidebar from '../Sidebar'
import MobileNav from '../MobileNav'

import PostHeading from '../Tailwind/PostHeading'
import { MDXRenderer } from "gatsby-plugin-mdx"
import './style.scss'

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata
    const post = this.props.data.mdx
    const tags = post.fields.tagSlugs
    const post_content = {
      title: post.frontmatter.title,
      subtitle: post.frontmatter.description
    }

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/blog">
          All Articles
        </Link>
      </div>
    )

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags &&
            tags.map((tag, i) => (
              <li className="post-single__tags-list-item" key={tag}>
                <Link to={tag} className="post-single__tags-list-item-link">
                  {post.frontmatter.tags[i]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    const commentsBlock = (
      <div>
        <Disqus
          postNode={post}
          siteMetadata={this.props.data.site.siteMetadata}
        />
      </div>
    )

    return (
      <div>
      <MobileNav {...this.props} />

      <div className="lg:h-screen md:flex lg:overflow-hidden bg-white">
        <Sidebar {...this.props} />
        <main class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
          <PostHeading { ... post_content } />
          <div className="max-w-screen-lg bg-white pt-0 pb-5 px-4 my-0 sm:px-6 lg:pt-5 lg:pb-5 lg:px-5 mx-8"><MDXRenderer>{post.body}</MDXRenderer></div> 
          <div className="max-w-screen-lg bg-white pt-0 pb-5 px-4 my-0 sm:px-6 lg:pt-5 lg:pb-5 lg:px-5 mx-8">
            {tagsBlock}
            <hr />
            <p className="post-single__footer-text">
              {subtitle}
              <a
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br /> <strong>{author.name}</strong> on Twitter
              </a>
            </p>
            {commentsBlock}
          </div>

        </main>
      </div>
      </div>
    )
  }
}

export default PostTemplateDetails
