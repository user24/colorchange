import React, { Component } from "react";
import YellowButton from "./components/yellowbutton.jsx";
import RedButton from "./components/redbutton.jsx";
import BlueButton from "./components/bluebutton.jsx";
import PurpleButton from "./components/purplebutton.jsx";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15%"
        }}
      >
        <YellowButton />
        <RedButton />
        <BlueButton />
        <PurpleButton />
      </div>
    );
  }
}

export default App;
