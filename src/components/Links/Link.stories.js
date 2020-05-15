import React from "react"
import Links from './index'

export default {
    component: Links,
    excludeStories: /.*Data$/,
    title: "Social Links List"
}

export const LinkData = {
    author: {
        name: 'Allan MacGregor',
        email: 'info@allanmacgregor.com',
        telegram: '#',
        twitter: 'allanmacgregor',
        github: 'amacgregor',
        rss: 'rss.xml',
        youtube: 'UCqcJE6lxT_vzGGSaUCy2efA',
        vk: '#',
        linkedin: 'allanmacgregor',
      }
}


export const Default = () => (
    <Links data={LinkData.author} />
)