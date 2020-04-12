import React from 'react'
import Sidebar from '../Sidebar'
import ProjectGrid from '../ProjectGrid'
import LatestPosts from '../Reusable/LatestPosts'
import CTASimple from '../Tailwind/CTASimple'
import RecentPublications from '../Tailwind/PageSection/RecentPublications'
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
    const publication = {
      title: "Recent publications",
      subtext: "Recent articles, videos and other content on software engineering and technology."
    }

    return (
      <div className="h-screen flex overflow-hidden">
        <Sidebar {...this.props} />
        <main class="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
          <CTASimple { ... cta_content } /> 
          <RecentPublications title={publication.title} subtext={publication.subtext} { ... this.props }/> 
          {/* <ProjectGrid { ... this.props } /> */}
        </main>
      </div>
    )
  }
}

export default HomePageTemplateDetails
