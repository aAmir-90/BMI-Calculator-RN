import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BmiCalculate from "./components/BmiCalculate";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Index /> */}
      <BmiCalculate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
