import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Intro from "./Intro";

class MenuOtro extends React.Component {
  state = {
    anchorEl: null,
    abreIntro: false,
    abreMenu: false,
    muestra: false,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onIntro = () => {
    this.setState({ abreIntro: true, muestra: true });
  };

  onBackToMenu = () => {
    this.setState({ abreIntro: false, abreMenu: true, muestra: true });
  };

  render() {
    const { anchorEl, abreIntro, abreMenu, muestra } = this.state;

    return (
      <div>
        <div
          alt="Welcome Image"
          style={{
            height: muestra ? "340px" : "72px",
            width: "100%",
            backgroundImage: 'url("/images/USPassports.jpg")',
          }}
        >
          <header className="App-header">
            <h2>Learn with RimiWeb</h2>
          </header>
        </div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.onIntro}>Introduction</MenuItem>
          <MenuItem onClick={this.handleClose}>Listening</MenuItem>
          <MenuItem onClick={this.handleClose}>Drills</MenuItem>
          <MenuItem onClick={this.onBackToMenu}>Back to Menu</MenuItem>
        </Menu>
        {abreMenu && <MenuOtro />}
        {abreIntro && <Intro />}
      </div>
    );
  }
}

export default MenuOtro;
