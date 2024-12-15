import React, { useState } from 'react';
import { View, Text, Image, StatusBar, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginButton from './android/app/src/components/LoginButton';
import TextInputEmail from './android/app/src/components/TextInputEmail';
import Menu from './android/app/src/components/Menu';
import LandingPage from './Screen/LandingPage';
import SignupScreen from './Screen/Siginup'; // Pastikan path benar
import ForgotPasswordScreen from './Screen/FogotPassword'; // Pastikan path benar

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validasi login jika diperlukan
    navigation.navigate('LandingPage');
  };

  const handleSignup = () => {
    navigation.navigate('Signup'); // Navigasi ke SignupScreen
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword'); // Navigasi ke ForgotPasswordScreen
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#dbe4f3' }}>
      <StatusBar backgroundColor="#dbe4f3" barStyle="dark-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}>
        <Image
          source={require('./android/app/src/components/Images/Lg1.png')}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
          By<Text style={{ color: '#2396F2' }}>Jalu</Text>
        </Text>
        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 18 }}>
          Login
        </Text>
      </View>

      <TextInputEmail
        state={email}
        set={setEmail}
        icon="envelope"
        placeholder="Masukkan email"
        isPassword={false}
      />
      <TextInputEmail
        state={password}
        set={setPassword}
        icon="lock"
        placeholder="Masukkan password"
        isPassword={true}
      />

      <LoginButton text="Login" color="#2396F2" onPress={handleLogin} />

      <Menu
        signupText="Daftar"
        forgotPasswordText="Lupa Password?"
        onSignupPress={handleSignup}
        onForgotPasswordPress={handleForgotPassword}
      />
    </ScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: true, title: 'Beranda' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
