import React from 'react'
import Sidebar from '../Sidebar'
import MobileNav from '../MobileNav'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import './style.scss'

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.mdx

    return (
      <div>
        <MobileNav {...this.props} />

        <div className="lg:h-screen md:flex lg:overflow-hidden bg-white">
          <Sidebar {...this.props} />
          <div className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">{page.frontmatter.title}</h1>
                <div className="page__body">
                  <MDXRenderer>{page.body}</MDXRenderer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTemplateDetails
