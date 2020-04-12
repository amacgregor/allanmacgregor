import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class InlinePost extends React.Component {
  render() {
    const {
      title,
      date,
      category,
      description,
    } = this.props.data.node.frontmatter

    const { slug, categorySlug } = this.props.data.node.fields

    return (

      <li class="listing-item">
        <Link className="inline_post__title-link" to={slug}>{title}</Link> 
        <span class="date">{moment(date).format('MMMM D, YYYY')}</span> 
        <span class="excerpt-dash">-</span> 
        <span class="excerpt">
          {description}
          <Link className="more-link" to={slug}>Continue reading <span class="meta-nav">→</span></Link> 
        </span>
      </li>



    )
  }
}

export default InlinePost
