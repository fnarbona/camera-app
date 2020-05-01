import React from 'react';
import {StyleSheet,Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Feather} from '@expo/vector-icons';

const Form = ({login, setEmail, setPassword, setForgotUser, navigation}) => (
  <>
    <View style={css.inputContainer}>
      <Feather name="user" style={css.inputIcon}/>
      <TextInput
        style={css.inputText}
        autoCapitalize="none"
        autocorrect={false}
        placeholder="Username"
        placeholderTextColor="#003f5c"
        keyboardType="email-address"
        returnKeyType="next"
        onChangeText={setEmail}/>
    </View>
    <View style={css.inputContainer}>
      <Feather name="lock" style={css.inputIcon}/>
      <TextInput
        style={css.inputText}
        autoCapitalize="none"
        autocorrect={false}
        placeholder="Password"
        placeholderTextColor="#003f5c"
        returnKeyType="go"
        secureTextEntry={true}
        onChangeText={setPassword}/>
    </View>
    <TouchableOpacity
      onPress={setForgotUser}>
      <Text style={css.forgotText}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={css.loginButton}
      onPress={() => login
        ? navigation.navigate('HomeScreen')
        : null}>
      <Text style={css.loginText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={setForgotUser}>
      <Text style={css.signupText}>Sign Up</Text>
    </TouchableOpacity>
  </>
)

const viewHeight = 50

const css = StyleSheet.create({
  inputContainer: {
    height: viewHeight,
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row'
  },
  inputText: {
    height: viewHeight,
    fontSize: 18,
    color: 'black'
  },
  forgotText: {
    color: "white",
    fontSize:14
  },
  signupText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  loginButton:{
    width: "80%",
    backgroundColor: "#fb4645",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  inputIcon: {
    fontSize: 25,
    color: '#003f5c',
    paddingRight: 10
  }
})

export default withNavigation(Form);
