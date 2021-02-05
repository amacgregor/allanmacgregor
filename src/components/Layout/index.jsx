import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'
import favicon from '../../assets/images/favicon.ico'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="lg:h-screen bg-white lg:flex lg:overflow-hidden">
        <Helmet defaultTitle="Blog by Allan MacGregor">
          <link rel="icon" href={favicon} />
        </Helmet>
        {children}
      </div>
    )
  }
}

export default Layout
