import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


import Main from './profile';
import Story from './profile/story';
export default function App() {
  return (

    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
        <Main />
        <Story />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
