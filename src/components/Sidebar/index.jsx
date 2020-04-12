import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Menu from '../Menu'
import Links from '../Links'
import profilePic from '../../pages/logo.png'
import './style.scss'

class Sidebar extends React.Component {
  render() {
    const { location } = this.props
    const {
      author,
      subtitle,
      copyright,
      menu,
    } = this.props.data.site.siteMetadata
    const isHomePage = get(location, 'pathname', '/') === '/'

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        {isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h1>
        ) : (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h2>
        )}
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return(
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 bg-indigo-800">
            <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Link to="/">
                  <img
                    src={profilePic}
                    className="sidebar__author-photo"
                    width="75"
                    height="75"
                    alt={author.name}
                  />
                </Link>
              </div>
              <div className="grid grid-cols-1 px-4">
                  <h3 className="text-white mt-0">
                    <Link className="text-white" to="/">
                      {author.name}
                    </Link>
                  </h3>
                  <p className="text-white">{subtitle}</p>
              </div>
              <nav className="mt-5 flex-1 px-2 bg-indigo-800">
                <Menu data={menu} />
              </nav>
              <div id="socialLinks" className="grid grid-cols-1 px-4">
                <div><Links data={author} /></div>
                <div className="text-white text-xs">{copyright}</div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Sidebar
