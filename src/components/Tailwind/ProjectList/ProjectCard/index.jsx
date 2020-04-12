import React from 'react'
import moment from 'moment'
import Link from '../../../Menu/link'
class ProjectCard extends React.Component {
  render() {
    const { Name, Logo, Url, Tagline, Description, Categories } = this.props.data.data
    const items = []
    Categories.forEach(category => {
      items.push(
        <p className="text-sm leading-5 font-medium text-indigo-600">
            {category}
        </p>
      )
    })

    return (
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="align-middle bg-indigo-800 flex items-centre px-4 pt-5 pb-2 border-b border-gray-200 sm:px-6">
            <Link to={Url}>
              <img
                src={Logo[0].url}
                className="sidebar__author-photo"
                width="50"
                height="50"
                alt="text"
              />
            </Link>
            <Link to={Url}>
              <h3 class="text-2xl m-0 p-0 pl-2 pt-3 leading-6 font-strong text-white">
                {Name}
              </h3>
            </Link>            
        </div>
        <div className="flex-1 p-6 object-cover flex flex-col justify-between">
          <div className="flex-1">
            {items}
            <a href={Url} className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {Tagline}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {Description}
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard
