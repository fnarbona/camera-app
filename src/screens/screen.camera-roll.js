import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text, Button,
  Image,
  View
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CameraRollScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [buttonText, setButtonText] = useState('Press to select an image to view')

  useEffect(() => {
    async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        // allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
      });
      if (!result.cancelled) {
        setSelectedImage(result.uri);
        setButtonText('Click to view another image')
      }

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={css.mainContainer}>
      <View style={css.imageContainer}>
      {
        selectedImage &&
        <Image
          style={css.image}
          source={{ uri: selectedImage }} />
      }
      </View>
      <TouchableOpacity
        style={css.button}
        onPress={() => pickImage()} >
        <Text style={css.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

    </View>
  );
}

const css = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(41, 43, 45)',
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // borderColor: 'cyan',
    // borderWidth: 2
  },
  image: {
    height: "100%",
    width: "100%"
  },
  button: {
    height: 60,
    width: 350,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(251, 70, 69)',
    // borderColor: 'rgb(251, 70, 69)',
    // borderWidth: 5,
    borderRadius: 30
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default CameraRollScreen;
