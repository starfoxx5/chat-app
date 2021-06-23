import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { auth } from "../firebase";

const HomeScreen = ({ navigation }) => {
  function signOut() {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={signOut} title="logout" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
