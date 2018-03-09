import React from 'react';

export default class Article extends React.Component {
  render() {
    return <article className="r-ui-article markdown-body">
      { this.props.children }
    </article>;
  }
}
