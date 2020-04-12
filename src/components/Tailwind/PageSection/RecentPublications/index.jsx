import React from 'react'
import { Link } from 'gatsby'
import Publication from '../RecentPublications/Publication'

class RecentPublications extends React.Component {
    render() {
        const items = []
        const posts = this.props.data.allMdx.edges
        posts.forEach(post => {
          items.push(<Publication data={post} key={post.node.fields.slug} />)
        })
    
        return (
            <div className="bg-white pt-5 pb-5 px-4 sm:px-6 lg:pt-5 lg:pb-5 lg:px-5 mx-8">
                <div className="relative max-w-lg mx-auto lg:max-w-7xl">
                    <div>
                    <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                        Recent publications
                    </h2>
                    <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
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

export default RecentPublications