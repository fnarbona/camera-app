import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';

import Form from '../components/comp.form';
import Logo from '../components/comp.logo';
import FadeInView from '../components/animated.fade-in-view';

import bgSrc from '../../assets/splashModernBlack_sm.png';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false)
  const [forgotUser, setForgotUser] = useState(false)

  useEffect(() => {
    if (email === 'test@email.com' && password === 'test123') {
      setLogin(true)
    }
  }, [email, password]);

  const emitForgotUser = () => {
    setForgotUser(true)
    const timer = setTimeout(() => {
      setForgotUser(false)
    }, 5000);
  }

  return (
    <ImageBackground style={css.backgroundImage} source={bgSrc}>
        <FadeInView style={css.mainContainer}>
            {forgotUser
              ? (<View style={css.forgotUserContainer}>
                    <Text style={css.forgotUserText}>
                      For Demo Purposes Only
                      Username: test@email.com
                      Password: test123
                    </Text>
                  </View>)
              : null
            }
          <KeyboardAvoidingView behavior="padding" style={css.container}>
          <Logo/>
          <Form
            login={!login}
            setEmail={setEmail}
            setPassword={setPassword}
            setForgotUser={emitForgotUser}/>
      </KeyboardAvoidingView>
      </FadeInView>
    </ImageBackground>
  );
}

const css = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(85, 85, 85, 0.6)',
    // other colors:
    // 'rgb(0, 63, 92)', // 'rgb(15, 32, 40)'
  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute'
  },
  forgotUserContainer: {
    height: '15%',
    width: '50%',
    position: 'absolute',
    borderRadius: 5,
    // height: 100,
    // width: 200,
    // marginHorizontal: "30%",
    paddingVertical: 20,
    backgroundColor: 'rgb(175, 175, 175)',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'flex-end'
  },
  forgotUserText: {
    alignSelf: 'center',
    fontWeight: 'bold'
  }
});

export default LoginScreen;
