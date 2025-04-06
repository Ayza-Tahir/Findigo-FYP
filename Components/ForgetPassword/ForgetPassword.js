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
  Platform 
} from 'react-native';
import UpdatePassword from '../../FireStore/UpdatePassword';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');

function ForgetPassword({ route }) {
  const { fullPhone } = route.params;
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const isResetEnabled =
    newPassword !== '' &&
    confirmPassword !== '' &&
    newPassword === confirmPassword &&
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(newPassword);

  const handleResetPassword = async () => {  // Make sure to add async here
    if (newPassword === '' || confirmPassword === '') {
      Alert.alert('Error', 'Please fill both fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(newPassword)) {
      Alert.alert(
        'Error',
        'Password must be at least 6 characters long, include a number and a special character.'
      );
      return;
    }

    
      const result = await UpdatePassword(fullPhone, newPassword);
     if (result.success) {
       Alert.alert('Success', result.message);
       navigation.navigate('CustomerLogin');
      } 
     else {
      Alert.alert('Error', result.message);
    }
    
   };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Reset Password</Text>
            <Text style={styles.text1}>Enter a new password</Text>
          </View>

          <View style={styles.container1}>
            <View style={styles.inputContainer}>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="New Password"
                  placeholderTextColor="#888"
                  secureTextEntry={!passwordVisible}
                  value={newPassword}
                  onChangeText={setNewPassword}
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
              style={[styles.button, { opacity: isResetEnabled ? 1 : 0.5 }]}
              onPress={handleResetPassword}
            >
              <Text style={styles.buttonText}>Reset Password</Text>
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
});

export default ForgetPassword;
