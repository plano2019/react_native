import React, { Component } from "react";
import Drawer from "react-native-drawer";
import Menu from "./Menu";
import Home from "./Home";
import Category from './Category';
import ProductPopular from './ProductPopular';
import Header from './Header';

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
        content={<Menu navigation = {this.props.navigation}/>}
        tapToClose
        openDrawerOffset={0.5}
      >
        <Header openMenu={this.openControlPanel.bind(this)}/>
        <Category />
        <ProductPopular />
      </Drawer>
    );
  }
}