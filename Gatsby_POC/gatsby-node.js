const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const tabTemplate = path.resolve('src/components/tab.js')
    resolve(
      graphql(`
        {
            allContentfulTab (limit: 100) {
            edges {
              node {
                id
                title
                content
              }
            }
          }
        }
      `).then((result) => {
          console.log(result.data.allContentfulTab);
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulTab.edges.forEach((edge) => {
          createPage ({
            path: edge.node.title,
            component: tabTemplate,
            context: {
              title: edge.node.title
            }
          })
        })
        return
      })
    )
  })
}