import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {createAssetAsync} from 'expo-media-library';
import {Camera} from 'expo-camera';
import {Ionicons} from '@expo/vector-icons';

const CameraScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flashType, setFlashType] = useState(Camera.Constants.FlashMode.off);
  const [captureStatus, setCaptureStatus] = useState(false);

  // hook checks for camera permissions and runs cleanup function on unmount
  useEffect(() => {
    console.log("camerascreen 2.0 mounted")
    const runPermissions = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      console.log(status)
      setHasPermission(status === 'granted');
    }

    runPermissions();

    return function cleanup() {
      console.log("camerascreen 2.0 unmounted")
      setHasPermission(null);
    }
  }, []);

  // permission for rendering
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // change to front or back camera
  const changeCameraType = () => (
    setCameraType( cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    )
  )

  // toggle flash when taking a picture
  const changeCameraFlash = () => (
    setFlashType( flashType === Camera.Constants.FlashMode.off
      ? Camera.Constants.FlashMode.on
      : Camera.Constants.FlashMode.off
    )
  )

  // takes the picture and also displays message confirming picture was taken
  const takePhoto = async () => {
    console.log("attempting to take a picture")
    if(cameraRef){
      let photo = await cameraRef.takePictureAsync();
      await createAssetAsync(photo.uri);
      setCaptureStatus(true)
      const timer = setTimeout(() => {
        console.log('This will run after 5 second!')
        setCaptureStatus(false)
      }, 5000);
      console.log('photo', photo);
    }
  };

  return (
    <Camera
      style={css.cameraContainer}
      type={cameraType}
      flashMode={flashType}
      ref={ref => {setCameraRef(ref)}}>

      <View style={css.mainContainer}>
          <View style={css.container}>
            <View style={css.button}/>
            <TouchableOpacity
              style={css.button}
              onPress={() => changeCameraFlash()}>
              <Ionicons
                name={flashType === Camera.Constants.FlashMode.off
                  ? "ios-flash-off"
                  : "ios-flash"}
                style={css.icon}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={css.button}
              onPress={() => navigation.goBack()}>
              <Ionicons name="md-close" style={css.icon}/>
            </TouchableOpacity>
          </View>

          <View style={css.container}>
            {captureStatus
              ? (<View style={css.captureMessage}>
                    <Text style={css.captureMessageText}>
                      Photo Captured!
                    </Text>
                  </View>)
              : null
            }
          </View>

          <View style={css.container}>
            <View style={css.button}/>
            <TouchableOpacity
              style={css.button, {alignItems: 'flex-end'}}
              onPress={() => takePhoto()}>
              <Ionicons name="ios-radio-button-on" style={css.capturePhotoButton}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={css.button}
              onPress={() => changeCameraType()}>
              <Ionicons name="ios-reverse-camera" style={css.icon}/>
            </TouchableOpacity>
          </View>
        </View>
    </Camera>
  )
}

const css = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    marginVertical: 50,
    justifyContent: 'space-between',
    // borderWidth: 2,
    // borderColor: 'red',
  },
  container: {
    flexDirection: 'row',
    // borderWidth: 2,
    // borderColor: 'yellow',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    padding: 10,
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'cyan',
  },
  icon: {
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
  },
  capturePhotoButton: {
    fontSize: 100,
    color: 'white',
  },
  captureMessage: {
    borderRadius: 5,
    flex: 1,
    marginHorizontal: "30%",
    paddingVertical: 10,
    backgroundColor: 'rgba(175, 175, 175, 0.6)',
    alignItems: 'center'
  },
  captureMessageText: {
    alignSelf: 'center',
    fontWeight: 'bold'
  }
});

export default CameraScreen;
