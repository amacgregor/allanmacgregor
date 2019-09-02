import React from 'react'
import Sidebar from '../Sidebar'
import ProjectGrid from '../ProjectGrid'
import './style.scss'

class HomePageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    const projects = this.props.data.githubViewer.repositories.nodes

    return (
      <div>
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
            <ProjectGrid { ... this.props } />
          </div>
        </div>
      </div>
    )
  }
}

export default HomePageTemplateDetails
