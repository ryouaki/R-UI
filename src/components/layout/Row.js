import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Col from './Col';

export default class Row extends React.PureComponent {

  static propTypes = {
    align: PropTypes.oneOf(['left', 'right', 'center', 'between', 'around']),
    className: PropTypes.string
  }

  static defaultProps = {
    align: 'left',
    chassName: ''
  }

  render() {
    let {
      align,
      children,
      className
    } = this.props;

    if (React.Children.count(children) <= 0) {
      throw new Error(`Layout.Row must work with least one child type of Layout.Col!`)
    }

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child) || child.type !== Col) {
        throw new Error(`Layout.Row must work with Layout.Col! The type of current child is [ ${child.type} ]`)
      }
    })

    return <div className={ classnames('row', align, className) }>
        { children }
      </div>
  }
}
