import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Forgotpassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Forgotpassword</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbe4f3',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2396F2',
  },
});

export default Forgotpassword;
