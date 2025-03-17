import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../FireBase/FireBase';
import { signInWithCredential, PhoneAuthProvider, signInWithPhoneNumber } from 'firebase/auth';

const { width, height } = Dimensions.get('window');

function PhoneVerification({ route }) {
  const { phone } = route.params; // Phone number from previous screen
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // Send OTP when the screen loads
  useEffect(() => {
    sendOtp();
  }, []);

  // Function to send OTP
  const sendOtp = async () => {
    setLoading(true);
    try {
      const confirmation = await signInWithPhoneNumber(auth, phone);
      
      if (!confirmation || !confirmation.verificationId) {
        throw new Error('Failed to get verification ID');
      }

      setVerificationId(confirmation.verificationId);
      Alert.alert('OTP Sent', `A verification code has been sent to ${phone}`);
    } catch (error) {
      console.error("OTP Error:", error);
      Alert.alert('Error', 'Failed to send OTP. Please try again.');
    }
    setLoading(false);
  };

  // Function to verify OTP
  const handleVerify = async () => {
    if (!verificationId) {
      Alert.alert('Error', 'Verification ID is missing. Please request OTP again.');
      return;
    }

    if (verificationCode.trim() === '') {
      Alert.alert('Error', 'Please enter the verification code.');
      return;
    }

    try {
      const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
      await signInWithCredential(auth, credential);

      Alert.alert('Success', 'Phone number verified successfully!');
      navigation.navigate('Home'); // Navigate to Home screen
    } catch (error) {
      console.error("Verification Error:", error);
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Verification Code</Text>
      <Text style={styles.subText}>We have sent a code to {phone}</Text>

      <TextInput
        style={styles.input}
        placeholder="Verification Code"
        keyboardType="numeric"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Verifying...' : 'Verify'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resendButton} onPress={sendOtp} disabled={loading}>
        <Text style={styles.resendText}>{loading ? 'Sending OTP...' : 'Resend OTP'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
  },
  text: {
    fontSize: width * 0.065,
    fontWeight: 'bold',
    marginTop: height * 0.14,
  },
  subText: {
    fontSize: width * 0.04,
    marginVertical: height * 0.02,
  },
  input: {
    width: '80%',
    padding: width * 0.025,
    fontSize: width * 0.045,
    backgroundColor: '#fff',
    marginBottom: height * 0.03,
    borderRadius: 5,
    height: height * 0.06,
    borderWidth: 1,
    borderColor: '#000',
  },
  button: {
    backgroundColor: '#00B1D0',
    paddingVertical: height * 0.014,
    paddingHorizontal: width * 0.12,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.05,
  },
  resendButton: {
    marginTop: 10,
  },
  resendText: {
    color: '#00B1D0',
    fontSize: width * 0.04,
    textDecorationLine: 'underline',
  },
});

export default PhoneVerification;
