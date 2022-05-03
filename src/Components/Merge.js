import React, { Component } from "react";
import Banner from "./Banner";
import Movies from "./Movies";

export default class merge extends Component {
  render() {
    return (
      <div style={{ flex: 1, height: "100%", flexDirection: "column" }}>
        {/* <Banner /> */}
        <Movies />
      </div>
    );
  }
}
