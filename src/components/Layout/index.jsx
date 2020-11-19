import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="lg:h-screen bg-white lg:flex lg:overflow-hidden">
        <Helmet defaultTitle="Blog by John Doe" />
        {children}
      </div>
    )
  }
}

export default Layout
