import React, { Component } from "react";
import Drawer from "react-native-drawer";
import Menu from "./Menu";
import App from "../../../App";
import { View, Text, StyleSheet } from 'react-native';

export default class Main extends Component {
  closeControlPanel = () => {
    this.drawer.close();
  };

  openControlPanel = () => {
    this.drawer.open();
  };

  render() {
    return (
      <View style = {styles.container}>
      <Text style={styles.textLink}>abc</Text>
      <Drawer
        ref={ref => (this.drawer = ref)}
        content={<Menu />}
        tapToClose
        openDrawerOffset={0.5}
      >
        <App open={this.openControlPanel.bind(this)} />
      </Drawer>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
  },
   textLink: {
      textDecorationLine: 'underline',
      color: '#002366',
      fontSize: 50,
      textDecorationColor: '#002366',
      textDecorationStyle: 'solid',
      paddingTop: 200
  }
});
