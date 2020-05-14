import React from "react"
import InlinePost from './index'

export default {
    component: InlinePost,
    excludeStories: /.*Data$/,
    title: "Inline Post"
}

export const InlinePostData = {
    node: {
        frontmatter: {
            title: "Test blog post",
            date: "2021-10-01",
            category: "programming",
            description: "This some description of what the blogpost is about",
        },
        fields: {
            slug: ''
        }
    }
}

export const Default = () => (
    <InlinePost data={InlinePostData} key={InlinePostData.node.fields.slug} />
)