import React from 'react'
import Sidebar from '../Sidebar'
import MobileNav from '../MobileNav'
import CTASimple from '../Tailwind/CTASimple'
import RecentPublications from '../Tailwind/PageSection/RecentPublications'
import ProjectList from '../Tailwind/ProjectList'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import './style.scss'
import { Link } from 'gatsby'

class HomePageTemplateDetails extends React.Component {
  render() {
    const page = this.props.data.mdx
    const projects = this.props.data.allAirtable
    const cta_content = {
      title: "Hi! I'm Allan",
      subtitle: 'This is where I write.',
    }
    const publication = {
      title: 'Recent publications',
      subtext:
        'Recent articles, videos and other content on software engineering and technology.',
    }
    const project_list = {
      title: 'Active Projects',
      subtext: "List of Open Source and side projects I'm actively working on.",
    }

    return (
      <div>
        <MobileNav {...this.props} />
        <div className="h-screen flex overflow-hidden">
          <Sidebar {...this.props} />
          <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
            <CTASimple {...cta_content} />
            <RecentPublications
              title={publication.title}
              subtext={publication.subtext}
              {...this.props}
            />
            <ProjectList
              title={project_list.title}
              subtext={project_list.subtext}
              {...this.props}
            />
          </main>
        </div>
      </div>
    )
  }
}

export default HomePageTemplateDetails
