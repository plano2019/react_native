import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

import bannerImage from '../../assets/images/categories/fruit.jpg'
import bo from '../../assets/images/categories/bo.png'
import cam from '../../assets/images/categories/cam.jpg'

const { width, height } = Dimensions.get('window');

export default class Category extends Component {
    render() {
        const { wrapper, textStyle, imageStyle, imageStyleBo, imageStyleCam } = styles;
        return (
            <View style={wrapper}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={textStyle}>Category</Text>
                </View>
                <View style={{flex: 4}}>
                    <Swiper showsButtons showsPagination={false}>
                        <Image source={bannerImage} style={imageStyle} />
                        <Image source={bo} style={imageStyleBo} />
                        <Image source={cam} style={imageStyleCam} />
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
        margin: 10,
        shadowColor: '#121212',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.2,
        padding: 5,
        paddingTop: 0
    },

    textStyle: {
        fontSize: 20,
        color: '#121212'
    },

    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        marginLeft: 50
    },

    imageStyleBo: {
        height: 160,
        width: 190,
        marginLeft: 100,
        marginBottom: 40
    },

    imageStyleCam: {
        height: 150,
        width: 160,
        marginLeft: 120,
        marginBottom: 40
    }
});