import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  render() {
    const {
      title,
      content
    } = this.props.data.contentfulTab
    return (
      <div>
        <h1>{title}</h1>
        <h2>{content}</h2>
      </div>
    )
  }
}

Tab.propTypes = {
  data: PropTypes.object.isRequired
}

export default Tab

export const pageQuery = graphql`
  query tabQuery($title: String!){
    contentfulTab(title: {eq: $title}) {
      title
      content
    }
  }
`