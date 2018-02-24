import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Row extends React.PureComponent {

  static propTypes = {
    align: PropTypes.oneOf(['left', 'right', 'center', 'between', 'around'])
  }

  static defaultProps = {
    align: 'left'
  }

  render() {
    let {
      align,
      children
    } = this.props;

    return <div className={ classnames('row', align) }>
        { children }
      </div>
  }
}
