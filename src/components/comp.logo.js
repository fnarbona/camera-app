import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const Logo = () => (
    <>
      <MaterialIcons style={css.logoIcon} name="camera"/>
      <Text style={css.logoText}>KAMERA</Text>
    </>
);

const css = StyleSheet.create({
  logoIcon: {
    fontSize: 70,
    color: 'rgb(251, 70, 69)'
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 50,
    color: 'rgb(251, 70, 69)',
    marginBottom: 60
  }
});

export default Logo;
