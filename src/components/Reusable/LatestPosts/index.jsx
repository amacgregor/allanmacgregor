import React from 'react'
import { Link } from 'gatsby'
import InlinePost from '../../InlinePost'

class LatestPost extends React.Component {
    render() {
        const items = []
        const posts = this.props.data.allMdx.edges
        posts.forEach(post => {
          items.push(<InlinePost data={post} key={post.node.fields.slug} />)
        })
    
        return (
            <section id="latestPosts">
              <h2>Latest Posts</h2>
              <ul class="display-posts-listing">{items}</ul>
            </section>
        )
      }
}

export default LatestPost