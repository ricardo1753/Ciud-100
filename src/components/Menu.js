import React, { Component } from "react";
import Intro from "../components/Intro";
import Listen from "../components/Listen";
import "../App.css";

class Menu extends Component {
  state = {
    intro: false,
    listen: false,
  };

  onIntro = () => {
    this.setState({ intro: true, listen: false });
  };
  onListen = () => {
    this.setState({ intro: false, listen: true });
  };
  onQuiz = () => { };
  
  render() {
    const { intro, listen } = this.state;
    return (
      <div>
        <div
          alt="Welcome Image"
          style={{
            height: !listen ? "340px" : "72px",
            width: "100%",
            backgroundImage: 'url("/images/USPassports.jpg")',
          }}
        >
          <header className="App-header">
            <h2>Learn with RimiWeb</h2>
          </header>
        </div>

        <button onClick={this.onIntro}>Help</button>
        <button onClick={this.onListen}>Listen</button>
        <button onClick={this.onQuiz}>Quiz</button>
        {intro && <Intro />}
        {listen && <Listen />}
      </div>
    );
  }
}

export default Menu;
