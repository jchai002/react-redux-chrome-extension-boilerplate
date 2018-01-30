import React, { Component } from "react";
import { connect } from "react-redux";
import { goTo } from "../actions/route";
import bindClickListener from "../utils/bindClickListener";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    bindClickListener("homeLink", "/");
    bindClickListener("pageOneLink", "/page1");
    bindClickListener("pageTwoLink", "/page2");
  }

  render() {
    return (
      <header>
        <a id="homeLink">Home</a>
        <a id="pageOneLink">Page One</a>
        <a id="pageTwoLink">Page Two</a>
      </header>
    );
  }
}

export default connect(null, { goTo })(Header);
