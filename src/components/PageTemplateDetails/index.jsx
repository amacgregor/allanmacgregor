import React from 'react'
import Sidebar from '../Sidebar'
import MobileNav from '../MobileNav'

import './style.scss'

class PageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.mdx

    return (
      <div>
      <MobileNav {...this.props} />

      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{page.frontmatter.title}</h1>
              <div
                className="page__body"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default PageTemplateDetails
