import React, { Component } from "react";
import Drawer from "react-native-drawer";
import Menu from "./Menu";
import App from "../../../App";

export default class Main extends Component {
  closeControlPanel = () => {
    this.drawer.close();
  };

  openControlPanel = () => {
    this.drawer.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => (this.drawer = ref)}
        content={<Menu />}
        tapToClose
        openDrawerOffset={0.5}
      >
        <App open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}