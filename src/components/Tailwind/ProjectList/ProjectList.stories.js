import React from "react"
import ProjectList from './index'
import { languages } from "prismjs"

export default {
    component: ProjectList,
    excludeStories: /.*Data$/,
    title: "Projects List"
}

export const ProjectListData = {
  allAirtable: {
    nodes: [
      {
        data: {
          Name: "Project Name",
          Categories: ["Saas"],
          Logo:[
            {url: "https://via.placeholder.com/50"}
          ],
          Url: "/test-project-url",
          Tagline: "Sample Tagline of the project",
          Description: "This is something that might be useful to a subset of users"

        }
      }
    ]
  }
}

export const MissingLogoData = {
  allAirtable: {
    nodes: [
      {
        data: {
          Name: "Project Name",
          Categories: ["Saas"],
          Logo:[],
          Url: "/test-project-url",
          Tagline: "Sample Tagline of the project",
          Description: "This is something that might be useful to a subset of users"
        }
      }
    ]
  }
}

export const Default = () => (
    <ProjectList data={ProjectListData} />
)

export const missingLogo = () => (
  <ProjectList data={MissingLogoData} />
)