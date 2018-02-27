import React from 'react';
import PropTypes from 'prop-types';

export default class Bundle extends React.Component {
  static propTypes = {
    load: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = { mod: null };
    this.isMounting = false;
  }

  componentWillMount() {
    this.isMounting = true;
    this.loadModule(this.props);
  }

  componentWillUnmount() {
    this.isMounting = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.loadModule(nextProps);
    }
  }

  loadModule(props) {
    this.setState({ mod: null });
    props.load().then((mod) => {
      if (this.isMounting) {
        this.setState({
          mod: mod.default ? mod.default : mod
        });
      }
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}
