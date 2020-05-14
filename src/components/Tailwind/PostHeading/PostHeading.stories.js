import React from "react"
import PostHeading from "./index"

export default {
    component: PostHeading,
    excludeStories: /.*Data$/, 
    title: "Post Heading"
}

export const PostHeadingData = {
    title: "This is a sample post title"
}

export const Heading = () => (
    <PostHeading { ... PostHeadingData} />
)