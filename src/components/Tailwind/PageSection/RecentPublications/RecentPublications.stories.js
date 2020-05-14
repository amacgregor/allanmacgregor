import React from "react"
import RecentPublications from './index'

var faker = require('faker')

export default {
  component: RecentPublications,
  excludeStories: /.*Data$/,
  title: "Recent Publications"
}

export const RecentPublicationsData = {
  allMdx: {
    edges: [
      {
        node: {
          frontmatter: {
            title: faker.lorem.words(),
            date: "2021-10-01",
            category: "programming",
            description: "This some description of what the blog post is about",
          },
          fields: {
            slug: faker.lorem.slug()
          },
          excerpt: faker.lorem.lines(),
          timeToRead: 5
        }
      },
      {
        node: {
          frontmatter: {
            title: faker.lorem.words(),
            date: "2021-10-01",
            category: "programming",
            description: "This some description of what the blog post is about",
          },
          fields: {
            slug: faker.lorem.slug()
          },
          excerpt: faker.lorem.lines(),
          timeToRead: 5
        }
      },
      {
        node: {
          frontmatter: {
            title: faker.lorem.words(),
            date: "2021-10-01",
            category: "programming",
            description: "This some description of what the blog post is about",
          },
          fields: {
            slug: faker.lorem.slug()
          },
          excerpt: faker.lorem.lines(),
          timeToRead: 5
        }
      },      
    ]
  }
}

export const Default = () => (
  <RecentPublications data={RecentPublicationsData} />
)