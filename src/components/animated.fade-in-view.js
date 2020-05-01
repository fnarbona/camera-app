import React, { useRef, useEffect } from 'react';
import {
  Animated,
  Text,
  View
} from 'react-native';

const FadeInView = (props) => {
  const animFadeIn = useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.timing(
      animFadeIn,
      {
        toValue: 1,
        duration: 3000,
      }
    ).start();
  }, [])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: animFadeIn,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default FadeInView;
