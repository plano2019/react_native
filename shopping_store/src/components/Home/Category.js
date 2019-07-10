import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import { firebaseApp } from '../../services/FirebaseConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');


export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories : [],
            selectedIndex: 0
        }
    }

    componentDidMount() {
        firebaseApp.database().ref('categories').on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({
                categories: items
            });
        });
    }

    onIndexChanged(index){
        this.setState({
            selectedIndex: index
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { wrapper, textStyle, imageStyle, categoryTitle } = styles;
        const {categories} = this.state;
        return (
            <View style={wrapper}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={textStyle}>Category</Text>
                </View>
                <View style={{flex: 4}}>
                    <Swiper 
                        showsButtons={false} 
                        showsPagination={true} 
                        loop={true}
                        index={this.state.selectedIndex} 
                        onIndexChanged={(index) => {
                            this.setState({
                              selectedIndex: index,
                            });
                          }}
                    >
                        {
                           categories.map((category) => {
                               return (
                                <TouchableOpacity onPress={() => navigate('ProductList', {categoryName : category.name})}>
                                    <Image 
                                        source={{uri: category.imageUrl}} 
                                        style={imageStyle} 
                                    />
                                    <Text style={categoryTitle}>{category.name}</Text>
                                </TouchableOpacity>
                               )
                               
                           })
                        }
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 130;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.3,
        backgroundColor: '#FFF',
        marginLeft: 10,
        shadowColor: '#121212',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.2,
        padding: 0,
        paddingTop: 0
    },

    textStyle: {
        fontSize: 20,
        color: '#121212'
    },

    categoryTitle: {
        fontSize: 15,
        color: '#121212',
        textAlign: 'center'
    },

    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        alignSelf: 'center'
    },
});