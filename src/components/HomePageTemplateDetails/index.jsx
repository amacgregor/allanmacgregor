import React from 'react'
import Sidebar from '../Sidebar'
import ProjectGrid from '../ProjectGrid'
import LatestPosts from '../Reusable/LatestPosts'
import CTASimple from '../Tailwind/CTASimple'
import { MDXRenderer } from "gatsby-plugin-mdx"
import './style.scss'
import { Link } from 'gatsby'

class HomePageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.mdx
    const projects = this.props.data.githubViewer.repositories.node
    const cta_content = {
      title: "Hi! I'm Allan",
      subtitle: "This is where I write."
    }

    return (
      <div className="h-screen flex overflow-hidden">
        <Sidebar {...this.props} />
        <div className="content flex flex-col w-0 flex-1">
          <CTASimple { ... cta_content } />  
          <div className="content__inner ">
            <div className="page">
              <div className="page__body max-w-screen-xl mx-auto py-5 px-4 sm:px-5 md:py-5 lg:px-5 lg:py-5">
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
