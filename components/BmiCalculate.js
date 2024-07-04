import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";

const BmiCalculate = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [decsription, setDescription] = useState("");

  const calculateBmi = () => {
    const bmi = weight / ((height / 100) * (height / 100));
    setBmi(bmi.toFixed(1));

    switch (true) {
      case bmi < 18.5:
        setDescription("Underweight, increase diet");
        break;
      case bmi >= 18.5 && bmi <= 24.9:
        setDescription("Normal, Keep it up!!");
        break;
      case bmi > 25 && bmi <= 29.9:
        setDescription("OverWeight, Hit the gym hard and eat healthy!!");
        break;
      case bmi > 30:
        setDescription("Obese, Go for workout and keep your diet clean!!");
        break;

      default:
        setDescription("Invalid BMI");
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Bmi Calculator</Text>
      </View>
      <TextInput
        style={styles.input}
        value={weight}
        placeholder="Weight in kg"
        keyboardType="number"
        onChangeText={(text) => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        value={height}
        placeholder="Height in kg"
        keyboardType="number"
        onChangeText={(text) => setHeight(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calculateBmi}>
        <Text style={styles.btnText}>Calculate</Text>
      </TouchableOpacity>
      <View style={styles.resultView}>
        <Text style={styles.result}>{bmi}</Text>
        <Text style={styles.result}>{decsription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0ecde",
    justifyContent: "center",
    padding: Constants.statusBarHeight,
  },
  title: {
    backgroundColor: "#2c6975",
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
    textAlign: "center",
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

export default BmiCalculate;
