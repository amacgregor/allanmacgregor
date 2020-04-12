import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="h-screen bg-white flex overflow-hidden">
        <Helmet defaultTitle="Blog by John Doe" />
        {children}
      </div>
    )
  }
}

export default Layout
