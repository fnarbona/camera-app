import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import bgSrc from '../../assets/splashCameraLenses_sm.png';

const HomeScreen = ({navigation}) => {

  return (
    <ImageBackground style={css.backgroundImage} source={bgSrc}>
      <View style={css.mainContainer}>
        <View style={css.container1}>
          <TouchableOpacity
            style={css.button}
            onPress={() => navigation.navigate('CameraRollScreen')}>
            <Text style={css.buttonText}>Pictures</Text>
          </TouchableOpacity>
        </View>
        <View style={css.container2}>
          <TouchableOpacity
            style={css.button}
            onPress={() => navigation.navigate('CameraScreen')}>
            <Text style={css.buttonText}>Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const css = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  mainContainer: {
    flex: 1
  },
  container1: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: 0,
    // borderRadius: 5,
    // shadowColor: '#393939',
    // shadowOffset: { width: 0, height: 8 },
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'rgba(251, 70, 69, 0.5)',
    margin: 0,
    // borderRadius: 5,
    // shadowColor: '#393939',
    // shadowOffset: { width: 0, height: 8 },
    // shadowOpacity: 0.8,
    // shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 160,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(41, 43, 45)',
    // borderColor: 'rgb(251, 70, 69)',
    // borderWidth: 5,
    borderRadius: 30
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default HomeScreen;
