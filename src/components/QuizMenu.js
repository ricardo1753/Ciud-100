import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Quiz from "../components/Quiz";
import Quiz2 from "../components/Quiz-2";
import Quiz3 from "../components/Quiz-3";

class QuizMenu extends Component {
  state = {
    actListenI: false,
    butListenI: true,
    butListenII: true,
    butMemDrillI: true,
  };
  onActiveListenI = () => {
    this.setState({
      actListenI: true,
      butListenI: false,
      butListenII: false,
      butMemDrillI: false,
    });
  };
  onActiveListenII = () => {
    this.setState({
      actListenI: false,
      butListenI: false,
      butListenII: true,
      butMemDrillI: false,
    });
  };
  onMemDrillI = () => {
    this.setState({
      actListenI: false,
      butListenI: false,
      butListenII: false,
      butMemDrillI: true,
    });
  };
  render() {
    const {
      actListenI,
      actListenII,
      butListenI,
      butListenII,
      butMemDrillI,
    } = this.state;
    return (
      <div className="nav-bar">
        {butListenI && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.onActiveListenI}
          >
            Listen I
          </Button>
        )}
        {butListenII && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.onActiveListenI}
          >
            Listen II
          </Button>
        )}
        {butMemDrillI && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.onMemDrillI}
          >
            Drill I
          </Button>
        )}
        <div>
          {actListenI && <Quiz />}
          {actListenII && <Quiz2 />}
          {butMemDrillI && <Quiz3 />}
        </div>
      </div>
    );
  }
}
export default QuizMenu;
