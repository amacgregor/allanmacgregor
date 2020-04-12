import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'

class Publication extends React.Component {
  render() {
    const {
      title,
      date,
      category,
      description,
    } = this.props.data.node.frontmatter
    const excerpt = this.props.data.node.excerpt
    const timeToRead = this.props.data.node.timeToRead
    const { slug, categorySlug } = this.props.data.node.fields

    return (
        <div>
        <div>
          <a href="#" className="inline-block">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800">
              {category}
            </span>
          </a>
        </div>
        <a href={slug} className="block">
          <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
            {title}
          </h3>
          <p className="mt-3 text-base leading-6 text-gray-500">
            {excerpt}
          </p>
        </a>
        <div className="mt-6 flex items-center">
            <div className="flex text-sm leading-5 text-gray-500">
              <time datetime="2020-03-16">
                {moment(date).format('MMMM D, YYYY')}
              </time>
              <span className="mx-1">
                &middot;
              </span>
              <span>
               {timeToRead} min read
              </span>
            </div>
        </div>
      </div>
    )
  }
}

export default Publication
