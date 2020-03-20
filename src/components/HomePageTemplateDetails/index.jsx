import React from 'react'
import Sidebar from '../Sidebar'
import ProjectGrid from '../ProjectGrid'
import LatestPosts from '../Reusable/LatestPosts'
import { MDXRenderer } from "gatsby-plugin-mdx"
import './style.scss'

class HomePageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.mdx
    const projects = this.props.data.githubViewer.repositories.nodes

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{page.frontmatter.title}</h1>
              <div className="page__body">
                <MDXRenderer>{page.body}</MDXRenderer>
                <LatestPosts { ... this.props } />
              </div>
            </div>
            <ProjectGrid { ... this.props } />
          </div>
        </div>
      </div>
    )
  }
}

export default HomePageTemplateDetails
