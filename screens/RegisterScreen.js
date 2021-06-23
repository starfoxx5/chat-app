import React, { useState, useLayoutEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";

import { Input, Button, Text } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  function register() {
    //
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Chat Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          onChangeText={setName}
        />
        <Input placeholder="Eamil" type="email" onChangeText={setEmail} />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          onChangeText={setPassword}
        />
        <Input
          placeholder="Profile Pic URL"
          type="text"
          onChangeText={setImageUrl}
          onSubmitEditing={register}
        />
      </View>
      <Button
        style={styles.button}
        title="Register"
        raised
        onPress={register}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: { width: 300 },
  button: { width: 200, marginTop: 10 },
});
