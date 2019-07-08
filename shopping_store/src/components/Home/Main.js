import React, { Component } from "react";
import { View } from "react-native";
import Drawer from "react-native-drawer";
import Menu from "./Menu";
import Category from './Category';
import ProductPopular from './ProductPopular';
import Header from './Header';
import { ScrollView } from "react-native-gesture-handler";

export default class Main extends Component {

  static navigationOptions = {
    header: null
  }

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
        
        <ScrollView >
        <Header openMenu={this.openControlPanel.bind(this)}/>
            <Category />
            <ProductPopular />
        </ScrollView>
      </Drawer>
    );
  }
}