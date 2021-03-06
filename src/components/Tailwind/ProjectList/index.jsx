import React from 'react'
import { Link } from 'gatsby'
import ProjectCard from './ProjectCard'
class ProjectList extends React.Component {
  render() {
    const items = []
    const projects = this.props.data.allAirtable.nodes
    projects.forEach((project) => {
      items.push(<ProjectCard data={project} key={project.data.name} />)
    })

    return (
      <div
        id="projectList"
        className="bg-white pt-0 pb-5 px-4 my-0 sm:px-6 lg:pt-5 lg:pb-5 lg:px-5 mx-8"
      >
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
            <h2 className="text-3xl leading-9 mt-0 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              {this.props.title}
            </h2>
            <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
              {this.props.subtext}
            </p>
          </div>
          <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
            {items}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectList
