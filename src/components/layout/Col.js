import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Col extends React.PureComponent {

  constructor(props) {
    super(props);

    this.CONSTANT_FLEX = {
      'fixed': 'fixed',  // 固定不变
      'grow': 'grow-only', // 只变大不变小
      'growAndShrink': 'grow-and-shrink', // 又能变大，又能变小
      'shrink': 'shrink-only' // 只缩小，不变大
    };
  }

  static propTypes = {
    flex: PropTypes.oneOf(['fixed', 'grow', 'growAndShrink', 'shrink']),
    className: PropTypes.string
  }

  static defaultProps = {
    flex: 'shrink',
    className: ''
  }

  render() {
    let {
      flex,
      children,
      className
    } = this.props;
    
    return <div className={classnames('col', this.CONSTANT_FLEX[flex], className)}>
        { children }
      </div>
  }
}
