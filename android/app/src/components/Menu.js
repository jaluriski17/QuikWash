import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Menu = ({ signupText, forgotPasswordText, navigation }) => {
  return (
    <View
      style={{
        marginHorizontal: 25,
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 20,
      }}>
      <TouchableOpacity
        style={{ flex: 1 }}

      >
        <Text style={{ fontWeight: 'bold' }}>{signupText}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}

      >
        <Text style={{ fontWeight: 'bold' }}>{forgotPasswordText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
