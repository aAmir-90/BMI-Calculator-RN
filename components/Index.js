import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";

const Index = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [description, setDescription] = useState("");

  const calculateBMI = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    setBmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      setDescription("underweight, eat more!");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setDescription("Normal, keep it up!!");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setDescription("Overweight, start workout....!!");
    } else if (bmi >= 30) {
      setDescription("Obese, Hit the gym and increase Diet");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>BMI Calculator</Text>
      </View>
      <TextInput
        style={styles.input}
        value={weight}
        placeholder="Weight in CM"
        keyboardType="number"
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        value={height}
        placeholder="Height in CM"
        keyboardType="number"
        onChangeText={(text) => setHeight(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.btnText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultView}>
        <Text style={styles.result}>{bmi}</Text>
        <Text style={styles.result}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: Constants.statusBarHeight,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    height: 80,
    justifyContent: "center",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  input: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#cde0c9",
    fontSize: 18,
    fontStyle: "italic",
  },
  button: {
    height: 55,
    margin: 15,
    borderWidth: 1 / 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#68b2a0",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  resultView: {
    margin: 15,
  },
  result: {
    fontSize: 30,
    color: "#2c6975",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default Index;
