import React from 'react'
import Link from 'gatsby-link'

const Tab = ({node}) => {
  return (
    <li>
      <Link to={node.title}><h3>{node.title}</h3></Link>
    </li>
  )
}
const IndexPage = ({data}) => (
  <ul className='blog-post'>
    {data.allContentfulTab.edges.map((edge) => <Tab node={edge.node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulTab (
    filter: {
      node_locale: {eq: "en-US"}
    },
    ) {
        edges {
          node {
            title
            content
          }
        }
    }
   }
`