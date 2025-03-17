
import React, { useState, useEffect } from 'react';
import { 
  View, Text, StyleSheet, Dimensions, ActivityIndicator, Image, TextInput, 
  TouchableOpacity,Alert, Platform, Linking 
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useFonts } from 'expo-font';


import loc from '../../assets/myloctionss.png';
import Home from '../../assets/Home.png';
import Like from '../../assets/Favourities.png';
import Category from '../../assets/Servies.png';
import Discount from '../../assets/Discounts.png';
import LocationIcon from '../../assets/Location.png';

const { width, height } = Dimensions.get('window');

function Locationss({ navigation }) {
  const [location, setLocation] = useState(null);
  const [manualAddress, setManualAddress] = useState('');
  const [fontsLoaded] = useFonts({
    Poppins: require('../../assets/Poppins-Regular.ttf'),
    Montserrat: require('../../assets/Montserrat-Regular.ttf'),
  });



useEffect(() => {
  promptForPermission();
}, []);
  const promptForPermission = async () => {
  try {
    const { status } = await Location.getForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert(
        'Location Access Required',
        'Kindly allow location access for smooth running of the app.',
        [
          {
            text: 'Allow',
            onPress: async () => {
              const { status: newStatus } = await Location.requestForegroundPermissionsAsync();
              if (newStatus === 'granted') {
                setPermissionGranted(true);
                startLiveLocationTracking();
              } else {
                Alert.alert(
                  'Permission Denied',
                  'You have denied location access. Please enable it from app settings.',
                  [
                    {
                      text: 'Go to Settings',
                      onPress: () => {
                        if (Platform.OS === 'ios') {
                          Linking.openURL('app-settings:');
                        } else {
                          Linking.openSettings();
                        }
                      },
                    },
                  ]
                );
              }
            },
          },
        ],
        { cancelable: false }
      );
    }
  } catch (error) {
    console.error('Error checking location permissions:', error);
  }
};


  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    } catch (error) {
      setErrorMsg('Could not fetch location');
    }
  };

 

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderSr} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={loc} style={styles.image} />
        <Text style={styles.text}>Here’s your current location</Text>
      </View>


      <View style={styles.mapContainer}> 
        {location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0822,
              longitudeDelta: 0.0321,
            }}
            showsUserLocation
            followsUserLocation
          >
            <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
          </MapView>
        ) : (
          <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderSr} />
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter address manually (optional)"
          value={manualAddress}
          onChangeText={setManualAddress}
        />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.footerContainer}>
        <FooterIcon source={Home} text="Home" onPress={() => navigation.navigate('Homes')} />
        <FooterIcon source={Like} text="Favourites" onPress={() => navigation.navigate('Likes')} />
        <FooterIcon source={Category} text="Services" onPress={() => navigation.navigate('Servicess')} />
        <FooterIcon source={LocationIcon} text="Location" onPress={() => navigation.navigate('Locationss')} />
        <FooterIcon source={Discount} text="Discounts" onPress={() => navigation.navigate('Discountss')} />
      </View>

      
    </View>
  );
}

const FooterIcon = ({ source, text, onPress }) => (
  <View style={styles.footerIconContainer} onTouchEnd={onPress}>
    <Image source={source} style={styles.footerIcon} />
    <Text style={styles.footerIconText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
    paddingTop: height * 0.06,
  },
  topContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  mapContainer: {
    height: height * 0.25,
    width: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: width < 350 ? 18 : width * 0.07,
    fontWeight: '500',
    textAlign: 'center',
    color: '#00B1D0',
    paddingHorizontal: 10,
  },
  image: {
    width: width * 0.35,
    height: undefined,
    aspectRatio: 1,
    marginBottom: 10,
  },
  inputContainer: {
    width: '90%',
    marginTop: 20,
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: '#00B1D0',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#00B1D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  footerContainer: {
    width: '100%',
    height: height * 0.1,
    backgroundColor: '#00B1D0',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerIconContainer: {
    alignItems: 'center',
  },
  footerIconText: {
    fontFamily: 'Poppins',
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
    marginTop: 5,
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  loaderSr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  allowButton: {
    backgroundColor: '#00B1D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  allowButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Locationss;
