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
    width: PropTypes.number,
    flex: PropTypes.oneOf(['fixed', 'grow', 'growAndShrink', 'shrink']),
    className: PropTypes.string
  }

  static defaultProps = {
    flex: 'shrink',
    className: ''
  }

  render() {
    let {
      width,
      flex,
      children,
      className
    } = this.props;
    
    let styles = {};

    // 这里是一个很神奇的处理，宽度设置成1，会引起不适，是100%？还是1px？
    // 所以如果想100%宽度的话，就要只包含一个Layout.Col，并设置flex='grow'或者'growAndShrink'
    if (flex === 'fixed') {
      styles.width = width < 1 ? (width * 100 + '%') : width;
      if (width === undefined || width < 0) {
        throw new Error(`Invalidate props [ Layout.Col width = ${width} ]!`);
      }
    } else if (width) {
      console.warn(`Warning: Props [ width ] without flex='fixed' will be ignored [ Layout.Col width = ${width} ]!`);
    }

    return <div 
             style={styles} 
             className={classnames('col', this.CONSTANT_FLEX[flex], className)}
           >
        { children }
      </div>
  }
}
