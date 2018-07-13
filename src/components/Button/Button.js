import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Button extends React.PureComponent {

  constructor(props) {
    super(props);

    this.MODE = {
      'normal': 'normal',
      'text': 'text',
      'primary': 'primary'
    };
  }

  static propTypes = {
    mode: PropTypes.oneOf(['normal', 'text', 'primary']),
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    className: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    mode: 'normal',
    className: '',
    type: 'button',
    loading: false,
    disabled: false,
  }

  render() {
    const {
      mode,
      className,
      type,
      loading,
      disabled,
      ...others
    } = this.props;

    return <button {...others} className="button" type={this.MODE[type]}>
      button
    </button>
  }
};