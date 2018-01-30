import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import Home from "./components/Home";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderComponent() {
    switch (this.props.route) {
      case "/":
        return <Home />;
      case "/page1":
        return <PageOne />;
      case "/page2":
        return <PageTwo />;
      default:
        return <Home />;
    }
    console.log("route in app", this.props.route);
  }

  render() {
    return (
      <div>
        <Header /> <main>{this.renderComponent()}</main>
      </div>
    );
  }
}

export default connect(({ route }) => ({ route }))(App);
