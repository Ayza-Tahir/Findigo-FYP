
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, FlatList, ActivityIndicator, ScrollView, TouchableOpacity, Alert, Platform, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import * as Location from 'expo-location';
import Logo from '../../assets/icon.png';
import Home from '../../assets/Home.png';
import Like from '../../assets/Favourities.png';
import Category from '../../assets/Servies.png';
import Discount from '../../assets/Discounts.png';
import IconLocation from '../../assets/Location.png';
import SavePic from '../../assets/save.png';
import addB from '../../assets/addBuisness.png';
import BoxImage1 from '../../assets/AutoRepair.png';
import BoxImage2 from '../../assets/FemaleSalon.png';
import BoxImage3 from '../../assets/HealthCare.png';
import BoxImage4 from '../../assets/HouseHold.png';
import BoxImage5 from '../../assets/Maid.png';
import BoxImage6 from '../../assets/MaleSalon.png';
import BoxImage7 from '../../assets/TechRepair.png';

import { useFonts } from 'expo-font';


const { width, height } = Dimensions.get('window');

function Homes() {
  const [fontsLoaded] = useFonts({
    Poppins: require('../../assets/Poppins-Regular.ttf'),
    Montserrat: require('../../assets/Montserrat-Regular.ttf'),
    Inter: require('../../assets/Inter-Regular.ttf'),
  });
  const [location, setLocation] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false); 
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const currentIndex = useRef(0);



  const SERVICES = [
  { id: '1', title: 'Auto Service', page: 'Service1' },
  { id: '2', title: 'Household Service', page: 'Service2' },
  { id: '3', title: 'Women Salon', page: 'Service3' },
  { id: '4', title: 'Tech Repair', page: 'Service4' },
  { id: '5', title: 'Health Care', page: 'Service5' },
  { id: '6', title: 'Maid & Cleaning', page: 'Service6' },
  { id: '7', title: 'Men Salon', page: 'Service7' },
  { id: '8', title: 'Car Repair', page: 'Service1', parentService: 'Auto Service' },
  { id: '9', title: 'Auto AC Repair', page: 'Service1', parentService: 'Auto Service' },  
  { id: '10', title: 'Tire Repair', page: 'Service1', parentService: 'Auto Service' },  
  { id: '11', title: 'Auto Paint & Body Work', page: 'Service1', parentService: 'Auto Service' },  
  { id: '12', title: 'Brake Inspection', page: 'Service1', parentService: 'Auto Service' },    
  { id: '13', title: 'Engine Repair', page: 'Service1', parentService: 'Auto Service' },    
  { id: '14', title: 'Auto Wash', page: 'Service1', parentService: 'Auto Service' },
  { id: '15', title: 'Battery Repair', page: 'Service1', parentService: 'Auto Service' },
  { id: '16', title: 'Bike Repair', page: 'Service1', parentService: 'Auto Service' },
  { id: '17', title: 'Plumber', page: 'Service2', parentService: 'Household Service'},
  { id: '18', title: 'Appliance', page: 'Service2', parentService: 'Household Service'},
  { id: '19', title: 'AC Repair', page: 'Service2', parentService: 'Household Service'},
  { id: '20', title: 'Pest Control', page: 'Service2', parentService: 'Household Service'},
  { id: '21', title: 'Carpenter', page: 'Service2', parentService: 'Household Service'},
  { id: '22', title: 'Electrician', page: 'Service2', parentService: 'Household Service'},
  { id: '23', title: 'Paint', page: 'Service2', parentService: 'Household Service'},
  { id: '24', title: 'Female Hair Cut', page: 'Service3', parentService: 'Women Salon'},
  { id: '25', title: 'Female Hair Styling', page: 'Service3', parentService: 'Women Salon'},
  { id: '26', title: 'Mehndi', page: 'Service3', parentService: 'Women Salon'},
  { id: '27', title: 'Female Facial', page: 'Service3', parentService: 'Women Salon'},
  { id: '28', title: 'Female Massage', page: 'Service3', parentService: 'Women Salon'},
  { id: '29', title: 'Female Hair Care', page: 'Service3', parentService: 'Women Salon'},
  { id: '30', title: 'Makeup', page: 'Service3', parentService: 'Women Salon'},
  { id: '31', title: 'Nail Work', page: 'Service3', parentService: 'Women Salon'},
  { id: '32', title: 'Female Threading', page: 'Service3', parentService: 'Women Salon'},
  { id: '33', title: 'Female Waxing', page: 'Service3', parentService: 'Women Salon'},
  { id: '34', title: 'Laptop Fix', page: 'Service4', parentService: 'Tech Repair'},
  { id: '35', title: 'TV Fix', page: 'Service4', parentService: 'Tech Repair'},
  { id: '36', title: 'Mobile Fix', page: 'Service4', parentService: 'Tech Repair'},
  { id: '37', title: 'Hospitals', page: 'Service5', parentService: 'Health Care'},
  { id: '38', title: 'Pharmacies', page: 'Service5', parentService: 'Health Care'},
  { id: '39', title: 'Laboratory', page: 'Service5', parentService: 'Health Care'},
  { id: '40', title: 'Clinics', page: 'Service5', parentService: 'Health Care'},
  { id: '41', title: 'Dentists', page: 'Service5', parentService: 'Health Care'},
  { id: '42', title: 'Psychologist', page: 'Service5', parentService: 'Health Care'},
  { id: '43', title: 'Physical Therapy', page: 'Service5', parentService: 'Health Care'},
  { id: '44', title: 'Carpet Cleaning', page: 'Service6', parentService: 'Maid & Cleaning'},
  { id: '45', title: 'Laundry', page: 'Service6', parentService: 'Maid & Cleaning'},
  { id: '46', title: 'House Maid', page: 'Service6', parentService: 'Maid & Cleaning'},
  { id: '47', title: 'Sofa Cleaning', page: 'Service6', parentService: 'Maid & Cleaning'},
  { id: '48', title: 'Water Tank Cleaning', page: 'Service6', parentService: 'Maid & Cleaning'},
  { id: '49', title: 'Male Waxing', page: 'Service7', parentService: 'Male Salon'},
  { id: '50', title: 'Male Facial', page: 'Service7', parentService: 'Male Salon'},
  { id: '51', title: 'Male Massage', page: 'Service7', parentService: 'Male Salon'},
  { id: '52', title: 'Male Hair Cut', page: 'Service7', parentService: 'Male Salon'},
  { id: '53', title: 'Male Hair Styling', page: 'Service7', parentService: 'Male Salon'},
  { id: '54', title: 'Shaving', page: 'Service7', parentService: 'Male Salon'},
  { id: '55', title: 'Male Threading', page: 'Service7', parentService: 'Male Salon'},

];

  const sliderData = [
    { id: 1, image: BoxImage1, name: 'Auto Repair', navigateTo: 'Service1' },
    { id: 2, image: BoxImage2, name: "Women's Salon", navigateTo: 'Service3' },
    { id: 3, image: BoxImage3, name: 'Health Care', navigateTo: 'Service5' },
    { id: 4, image: BoxImage4, name: 'Household Work', navigateTo: 'Service2' },
    { id: 5, image: BoxImage5, name: 'Maid & Cleaning', navigateTo: 'Service6' },
    { id: 6, image: BoxImage6, name: "Male's Salon", navigateTo: 'Service7' },
    { id: 7, image: BoxImage7, name: 'Tech Repair', navigateTo: 'Service4' },
  ];

  useEffect(() => {
    requestLocationPermission();

  }, []);
 
  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % sliderData.length; 
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: currentIndex.current * 155, 
          animated: true,
        });
      }
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

 
  const handleSearch = (text) => {
    setQuery(text);
    if (text.length > 0) {
      const results = SERVICES.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };

  const handleNavigation = (service) => {
    if (service) {
      if (service.parentService) {
        navigation.navigate(service.page, { serviceName: service.title });
      } else {
        navigation.navigate(service.page, { name: service.title });
      }
      setQuery('');
      setFilteredData([]);
    }
  };


  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.getForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Location Access Needed',
          'We need your location to provide real-time updates. Please allow access in the next prompt.',
          [
            {
              text: 'OK',
              onPress: async () => {
                const { status: newStatus } = await Location.requestForegroundPermissionsAsync();
                if (newStatus === 'granted') {
                  setPermissionGranted(true);
                  startLiveLocationTracking();
                } else {
                  promptForPermission(); 
                }
              },
            },
          ],
          { cancelable: false } 
        );
      } else {
        setPermissionGranted(true);
        startLiveLocationTracking();
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  const promptForPermission = () => {
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
  };

  const startLiveLocationTracking = async () => {
    try {
      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (newLocation) => setLocation(newLocation)
      );
    } catch (error) {
      console.error('Error starting live tracking:', error);
    }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00B1D0" style={styles.loaderSr} />;
  }

  const navigateToHome = () => {
    navigation.navigate('Discountss');
  };

  const navigateToB = () => {
    navigation.navigate('BuisnessSide');
  };

  return (
    <View style={styles.containerAS}>
      <View style={styles.containerHome}>
        <Image source={Logo} style={styles.imageAS} />    
  <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#888"
        value={query}
        onChangeText={handleSearch}
        onSubmitEditing={() => {
          if (filteredData.length > 0) {
            handleNavigation(filteredData[0]);
          } else {
            Alert.alert('No matching service found.Try another keyword or visit Our Services');
          }
        }}
      />

      {filteredData.length > 0 && (
        <View style={styles.dropdown}>
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.resultItem}
                onPress={() => handleNavigation(item)}
              >
                <Text style={styles.resultText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}


      </View>
      <ScrollView>
        <View>
          <Text style={styles.servicesText}>Our Services</Text>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            style={styles.sliderContainer}
          >
            {sliderData.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.navigateTo)}>
                <View style={styles.sliderWrapper}>
                  <View style={styles.sliderBox}>
                    <Image source={item.image} style={styles.sliderImage} />
                  </View>
                  <Text style={styles.serviceName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.saveC}>
          <Text style={styles.saveT}>Enjoy Special Savings and Promotions</Text>
          <Image source={SavePic} style={styles.saveP} />
          <TouchableOpacity style={styles.buttonSave} onPress={navigateToHome} activeOpacity={0.7}>
            <Text style={styles.textSave}>Savings</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.servicesText1}>Top Related Vendors Near you</Text>
        <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false} 
          style={styles.sliderContainer1}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <View key={item} style={styles.sliderBox1}>
              <Text style={styles.sliderText}>vendor {item}</Text>
            </View>
          ))}
        </ScrollView>


        <View style={styles.addC}>
          <Text style={styles.addT}>Grow Your Buisness with us</Text>
          <View style={styles.addC1}>
            <View style={styles.addC2}>
              <Image source={addB} style={styles.addB1} />
            </View>
            <View style={styles.addC3}>
              <Text style={styles.addT1}>
                Join us and reach an audience that’s 40% more likely to convert into loyal customers. Boost your sales and watch your business grow!
              </Text>
              <TouchableOpacity style={styles.buttonB} onPress={navigateToB} activeOpacity={0.7}>
                <Text style={styles.addT2}>Add Business</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footerContainerAS}>
        <TouchableOpacity style={styles.footerIconContainer} onPress={() => navigation.navigate('Homes')}>
          <Image source={Home} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer} onPress={() => navigation.navigate('Likes')}>
          <Image source={Like} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer} onPress={() => navigation.navigate('Servicess')}>
          <Image source={Category} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer} onPress={() => navigation.navigate('Locationss')}>
          <Image source={IconLocation} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer} onPress={() => navigation.navigate('Discountss')}>
          <Image source={Discount} style={styles.footerIcon} />
          <Text style={styles.footerIconText}>Discounts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAS: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
    paddingBottom: height * 0.1,
    gap: 0,
  },

  containerHome: {
    backgroundColor: '#00B1D0',
    width: '100%',
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageAS: {
    width: width * 0.25,
    height: undefined,
    aspectRatio: 1,
    marginTop: width * 0.13,
    marginBottom:'2%',
  },



containerHome: {
  backgroundColor: '#00B1D0',
  width: '100%',
  height: height * 0.25,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',  
},


searchBar: {
  height: '18%',          
  width: '90%',            
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  backgroundColor: '#f9f9f9',
  paddingLeft: '5%',     
  fontSize: '14',        
  zIndex: 2,
},

dropdown: {
  position: 'absolute',
  top: '95%',           
  left: '5%',
  right: '5%',
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  zIndex: 3,
  maxHeight: '60%',      
  overflow: 'hidden',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
},

resultItem: {
  padding: '4%',        
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
},

resultText: {
  fontSize: width * 0.03,        
  color: '#333',
},



  saveC: {
    borderColor: '#00B1D0',
    borderWidth: 1,
    width: '96%',
    height: height * 0.15,
    flexDirection: 'row',
    gap: 12,
    marginHorizontal: '2%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.03,
    marginTop:'4%',
    marginBottom:'4%',
  },

  saveP: {
    width: width * 0.25,
    height: width * 0.25,
    opacity: 1,
  },
  saveT: {
    color: '#000000',
    fontFamily: 'Inter',
    fontSize: width * 0.034,
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: width * 0.04,
    textAlign: 'center',
    width: width * 0.26,
    height: height * 0.06,
    opacity: 1,
  },

  buttonSave: {
    backgroundColor: '#00B1D0',
    width: width * 0.27,
    height: height * 0.04,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSave: {
    fontFamily: 'Montserrat',
    fontSize: width * 0.034,
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: width * 0.035,
    textAlign: 'center',
    color: '#000000',
  },


 sliderContainer: {
    marginVertical: height * 0.01,    
    paddingLeft: width * 0.04,        
  },

  sliderBox: {
    backgroundColor: 'white',
    width: width * 0.35,             
    height: height * 0.15,           
    borderRadius: width * 0.03,       
    marginRight: width * 0.04,       
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 2,
  },

  sliderWrapper: {
    alignItems: 'center',
    marginRight: width * 0.04,      
  },

  sliderText: {
    fontSize: width * 0.04,          
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },

  servicesText: {
    fontSize: width * 0.05,           
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: width * 0.025,       
    marginTop: height * 0.015,        
    color: '#000',
  },

  sliderImage: {
    width: width * 0.25,              
    height: height * 0.12,            
    resizeMode: 'contain',
  },

  serviceName: {
    marginTop: height * 0.01,         
    fontSize: width * 0.035,         
    fontWeight: '600',
    color: '#333',
    textAlign: 'left',
  },


  servicesText1: {
    fontSize: width * 0.05,           
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: width * 0.025,               
    color: '#000',
  },

 sliderContainer1: {
    marginVertical: height * 0.01,    
    paddingLeft: width * 0.05,        
  },

  sliderBox1: {
    backgroundColor: 'white',
    width: width * 0.7,     
    height: height * 0.25,          
    borderRadius: width * 0.03,       
    marginRight: width * 0.04,       
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 2,
  },


  addC: {
    width: '96%',
    marginHorizontal: '2%',
    marginVertical: 10,
    alignItems: 'center',
    gap: 6,
    flexDirection: 'column',
  },

addT: {
  fontFamily: 'Poppins',
  fontSize: width * 0.055,
  fontWeight: '900',
  lineHeight: width * 0.075,
  textAlign: 'center',
  color: '#00B1D0',
  marginBottom: height * 0.01,
},

  addC1: {
    flexDirection: 'row',
    width: '100%',
    padding: width * 0.022,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    alignItems: 'center',
    gap: width * 0.05,
  },

  addC2: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  addB1: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },

  addC3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: height * 0.01,
  },

  addT1: {
    fontFamily: 'Inter',
    fontSize: width * 0.033,
    fontStyle: 'italic',
    fontWeight: '600',
    lineHeight: height * 0.02,
    textAlign: 'center',
    color: '#000000',
    marginBottom: height * 0.01,
  },

  buttonB: {
    backgroundColor: '#00B1D0',
    width: '60%',
    borderRadius: 5,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  addT2: {
    fontFamily: 'Montserrat',
    fontSize: width * 0.035,
    fontStyle: 'italic',
    fontWeight: '500',
    lineHeight: height * 0.025,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  footerContainerAS: {
    width: '100%',
    height: height * 0.1,
    backgroundColor: '#00B1D0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 5,
  },

  footerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerIconText: {
    fontFamily: 'Poppins',
    fontSize: width < 350 ? 10 : 12,
    fontStyle: 'italic',
    fontWeight: '300',
    lineHeight: 12,
    textAlign: 'center',
    color: '#000000',
    marginTop: 5,
  },

  footerIcon: {
    width: width < 350 ? 25 : 30,
    height: width < 350 ? 25 : 30,
  },

  loaderSr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
  },
});

export default Homes;
