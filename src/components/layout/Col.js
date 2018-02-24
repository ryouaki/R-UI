import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Col extends React.PureComponent {

  static propTypes = {
    width: PropTypes.number.isRequired,
    fixed: PropTypes.bool
  }

  static defaultProps = {
    width: 100
  }

  render() {
    let {
      width,
      fixed,
      children
    } = this.props;

    return <div 
             style={{width: width}} 
             className={classnames('col', { 'fixed': fixed})}
           >
        { children }
      </div>
  }
}
