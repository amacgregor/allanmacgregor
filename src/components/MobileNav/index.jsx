import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import Menu from '../Menu'
import Links from '../Links'
import logo from '../../pages/logo-white.png'

class MobileNav extends React.Component {
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
            src={logo}
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

    return (
      <nav className="bg-indigo-700 md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={logo}
                  className="sidebar__author-photo"
                  width="50"
                  height="50"
                  alt={author.name}
                />
              </Link>
              <span className="font-semibold text-xl tracking-tight">
                <a className="no-underline text-white" href="/">
                  Allan MacGregor
                </a>
              </span>
            </div>
          </div>
          <div className="md:hidden block pt-4 pb-3 border-t border-indigo-800">
            <div className="border-indigo-800">
              <div
                className="mt-1 px-0"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <Link
                  to="/"
                  className="block m-0 px-0 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
                >
                  Start Here
                </Link>
                <Link
                  to="/blog"
                  className="block m-0 px-0 py-2 rounded-md text-base font-medium text-indigo-300 hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default MobileNav
