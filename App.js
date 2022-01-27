import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, DrawerLayoutAndroid } from 'react-native';
import React, { useState, useRef } from 'react';
import { Header, Icon, Text, Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  const drawer = useRef(null);

  const docsNavigate = () => {
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={navigationView}
    >
    <SafeAreaProvider>
      <Header
      backgroundImageStyle={{}}
      barStyle="default"
      centerComponent={{
        text: "MY TITLE",
        style: { color: "#fff" }
      }}
      centerContainerStyle={{}}
      leftComponent={{ icon: "menu", color: "#fff", onPress: () => {drawer.current.openDrawer()} }}
      leftContainerStyle={{}}
      placement="left"
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
                title={'React Native Elements'}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
      <TouchableOpacity onPress={docsNavigate}>
                <Icon name="description" color="white" />
              </TouchableOpacity>
    </View>
    </SafeAreaProvider>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  }
});

export default App;