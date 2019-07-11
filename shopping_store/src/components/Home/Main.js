import React, { Component } from "react";
import { ScrollView , Text, TouchableOpacity} from "react-native";
import Category from './Category';
import ProductPopular from './ProductPopular';
import { Header } from "./Header";


export default class Main extends Component {
  static navigationOptions = ({navigation}) => ({
    header: <Header navigationProps={navigation}/>
  })
  render() {
    return (
        <ScrollView >
            <Category/>
            <ProductPopular />
        </ScrollView>
    );
  }
}