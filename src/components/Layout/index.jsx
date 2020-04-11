import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Helmet defaultTitle="Blog by John Doe" />
        {children}
      </div>
    )
  }
}

export default Layout
