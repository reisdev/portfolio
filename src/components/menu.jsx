import React, { Component } from "react";

import { moon, sun } from "../img";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="links">
          <a className="item">Home</a>
          <a className="item">Projects</a>
          <a className="right floated item" onClick={this.props.toggleDarkMode}>
            {this.props.dark ? <img alt="Sun icon to active light mode" src={sun} /> : <img alt="Light icon to activate dark mode" src={moon} />}
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dark: state.darkMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDarkMode: e => dispatch({ type: "TOGGLE_DARK_MODE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
