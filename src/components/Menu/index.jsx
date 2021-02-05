import React from 'react'
import './style.scss'
import Link from '../Menu/link'

class Menu extends React.Component {
  render() {
    const menu = this.props.data

    const menuBlock = (
      <div>
        {menu.map((item) => (
          <Link
            to={item.path}
            className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-indigo-300 rounded-md hover:text-white hover:bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-700 transition ease-in-out duration-150"
            activeClassName="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-indigo-900 focus:outline-none focus:bg-indigo-700 transition ease-in-out duration-150"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )

    return <nav className="menu">{menuBlock}</nav>
  }
}

export default Menu
