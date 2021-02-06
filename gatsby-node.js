const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/post-template.jsx')
    const blogTemplate = path.resolve('./src/templates/blog-template.jsx')
    const pageTemplate = path.resolve('./src/templates/page-template.jsx')
    const essayPageTemplate = path.resolve('./src/templates/essay-template.jsx')
    const essayAggregatorTemplate = path.resolve('./src/templates/essays-template.jsx')
    const tilPageTemplate = path.resolve('./src/templates/journal-template.jsx')
    const tilAggregatorTemplate = path.resolve('./src/templates/til-template.jsx')
    const categoryTemplate = path.resolve('./src/templates/category-template.jsx')

    generatePages(createPage, graphql, 'page', pageTemplate, categoryTemplate, 'pages', resolve);
    generatePages(createPage, graphql, 'post', postTemplate, blogTemplate, 'blog', resolve);
    generatePages(createPage, graphql, 'essay', essayPageTemplate, essayAggregatorTemplate, 'essays', resolve);
    generatePages(createPage, graphql, 'journal', tilPageTemplate, tilAggregatorTemplate, 'til', resolve);

  })
}

function generatePages(createPage, graphql, layout_type, entity_template, aggregator_template, route, resolve) {
  const tagTemplate = path.resolve('./src/templates/tag-template.jsx')
  const categoryTemplate = path.resolve('./src/templates/category-template.jsx')

  graphql(`
  {
    allMdx(
      limit: 1000
      filter: {
        frontmatter: { layout: { eq: "${layout_type}" }, draft: { ne: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            layout
            category
          }
        }
      }
    }
  }
`).then((result) => {
  if (result.errors) {
    console.log(result.errors)
    reject(result.errors)
  }
  // Create pages
  const entities = result.data.allMdx.edges
  const entitiesPerPage = 9
  const numPages = Math.ceil(entities.length / entitiesPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${route}` : `/${route}/${i + 1}`,
      component: slash(aggregator_template),
      context: {
        limit: entitiesPerPage,
        skip: i * entitiesPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  _.each(result.data.allMdx.edges, (edge) => {
    if (_.get(edge, 'node.frontmatter.layout') === layout_type) {
      createPage({
        path: edge.node.fields.slug,
        component: slash(entity_template),
        context: { slug: edge.node.fields.slug },
      })

      let tags = []
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }

      tags = _.uniq(tags)
      _.each(tags, (tag) => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`
        createPage({
          path: tagPath,
          component: tagTemplate,
          context: { tag },
        })
      })
    }

    let categories = []
    if (_.get(edge, 'node.frontmatter.category')) {
      categories = categories.concat(edge.node.frontmatter.category)
    }

    categories = _.uniq(categories)
    _.each(categories, (category) => {
      const categoryPath = `/categories/${_.kebabCase(category)}/`
      createPage({
        path: categoryPath,
        component: categoryTemplate,
        context: { category },
      })
    })
  })

    resolve()
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'File') {
    const parsedFilePath = path.parse(node.absolutePath)
    let slug = `/${parsedFilePath.dir.split('---')[1]}/`
    createNodeField({ node, name: 'slug', value: slug })
  } else if (node.internal.type === 'Mdx' && typeof node.slug === 'undefined') {
    const fileNode = getNode(node.parent)
    if (typeof node.frontmatter.path !== 'undefined') {
      slug = node.frontmatter.path
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    createNodeField({
      node,
      name: 'modifiedTime',
      value: fileNode.mtime,
    })

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        (tag) => `/tags/${_.kebabCase(tag)}/`
      )
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }

    if (typeof node.frontmatter.category !== 'undefined') {
      const categorySlug = `/categories/${_.kebabCase(
        node.frontmatter.category
      )}/`
      createNodeField({ node, name: 'categorySlug', value: categorySlug })
    }
  } else if (
    node.internal.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined'
  ) {
    const fileNode = getNode(node.parent)
    let slug = fileNode.fields.slug
    if (typeof node.frontmatter.path !== 'undefined') {
      slug = node.frontmatter.path
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        (tag) => `/tags/${_.kebabCase(tag)}/`
      )
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }

    if (typeof node.frontmatter.category !== 'undefined') {
      const categorySlug = `/categories/${_.kebabCase(
        node.frontmatter.category
      )}/`
      createNodeField({ node, name: 'categorySlug', value: categorySlug })
    }
  }
}

// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
