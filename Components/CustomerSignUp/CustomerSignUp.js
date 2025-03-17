import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

function CustomerSignUp({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  
  const isSignUpEnabled =
    name.trim() !== '' &&
    phone.trim() !== '' &&
    password !== '' &&
    confirmPassword !== '' &&
    password === confirmPassword;

  
  const handlePhoneChange = (text) => {
    let cleanText = text.replace(/[^0-9]/g, '');
    if (cleanText.length <= 13) {
      if (cleanText.startsWith('92')) {
        cleanText = cleanText.slice(2);
      }
      setPhone('+92' + cleanText);
    }
  };

  const handleSignUp = () => {
    if (name.trim() === '' || phone.trim() === '' || password === '' || confirmPassword === '') {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

   
    if (!/^\+92(3\d{9})$/.test(phone)) {
      Alert.alert('Error', 'Enter a valid Pakistani phone number (+923xxxxxxxxx).');
      return;
    }


    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
      Alert.alert(
        'Error',
        'Password must be at least 6 characters long and include a number and a special character.'
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

   
    navigation.navigate('PhoneVerification', { phone });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Create Account</Text>
            <Text style={styles.text1}>Connect to trusted services</Text>
          </View>

          <View style={styles.container1}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}
              />

              <TextInput
                style={styles.input}
                placeholder="Phone No.(+923xxxxxxxxx)"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
                maxLength={13}
                value={phone}
                onChangeText={handlePhoneChange}
              />

              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderTextColor="#888"
                  secureTextEntry={!passwordVisible}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <Ionicons
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    size={width * 0.06}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Confirm Password"
                  placeholderTextColor="#888"
                  secureTextEntry={!confirmPasswordVisible}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  <Ionicons
                    name={confirmPasswordVisible ? 'eye' : 'eye-off'}
                    size={width * 0.06}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.button, { opacity: isSignUpEnabled ? 1 : 0.5 }]}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('CustomerLogin')}>
              <Text style={styles.loginText}>
                Already have an account? <Text style={styles.loginHighlight}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B1D0',
  },
  textContainer: {
    position: 'absolute',
    top: height * 0.09,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: width * 0.1,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  text1: {
    fontSize: width * 0.035,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  container1: {
    position: 'absolute',
    top: height * 0.2,
    width: '100%',
    height: '100%',
    backgroundColor: '#F1FFF3',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopLeftRadius: width * 0.21,
    borderTopRightRadius: width * 0.21,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: height * 0.09,
  },
  input: {
    width: '100%',
    height: height * 0.062,
    backgroundColor: '#FFF',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.04,
    color: '#333',
    marginBottom: height * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: height * 0.002 },
    shadowOpacity: 0.1,
    shadowRadius: width * 0.015,
    elevation: 2,
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  passwordInput: {
    width: '100%',
    height: height * 0.062,
    backgroundColor: '#FFF',
    borderRadius: width * 0.03,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.04,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: height * 0.002 },
    shadowOpacity: 0.1,
    shadowRadius: width * 0.015,
    elevation: 2,
    marginBottom: height * 0.02,
  },
  eyeIcon: {
    position: 'absolute',
    right: width * 0.05,
    top: '38%',
    transform: [{ translateY: -width * 0.03 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    height: height * 0.062,
    backgroundColor: '#00B1D0',
    borderRadius: width * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: height * 0.002 },
    shadowOpacity: 0.1,
    shadowRadius: width * 0.015,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: width * 0.06,
    fontWeight: '600',
  },
  loginText: {
    marginTop: height * 0.03,
    fontSize: width * 0.03,
    color: '#666',
  },
  loginHighlight: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default CustomerSignUp;
