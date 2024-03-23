import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);
  const [clearDisplay, setClearDisplay] = useState(false);

  const handleNumberInput = num => {
    if (displayValue === "0" || clearDisplay) {
      setDisplayValue(num === "." ? "0." : num.toString());
      setClearDisplay(false);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = op => {
    if (prevValue !== null) {
      calculate();
    }
    setOperator(op);
    setPrevValue(parseFloat(displayValue));
    setClearDisplay(true);
  };

  const calculate = () => {
    const currentValue = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
      case "+":
        result = prevValue + currentValue;
        break;
      case "-":
        result = prevValue - currentValue;
        break;
      case "*":
        result = prevValue * currentValue;
        break;
      case "/":
        if (currentValue === 0) {
          setDisplayValue("Error");
          return;
        }
        result = prevValue / currentValue;
        break;
      default:
        return;
    }
    setDisplayValue(result.toString());
    setPrevValue(result);
  };

  const handleBackButton = () => {
    if (displayValue.length === 1 || (displayValue.length === 2 && displayValue.startsWith("-"))) {
      setDisplayValue("0");
      setClearDisplay(false);
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const handleEquals = () => {
    calculate();
    setOperator(null);
    setClearDisplay(true);
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setPrevValue(null);
    setClearDisplay(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>
          {prevValue !== null ? prevValue : ""}
          {operator}
          {clearDisplay ? "" : displayValue}
        </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBackButton}>
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput("/")}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput("7")}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput("8")}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput("9")}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput("*")}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput("4")}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput("5")}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput("6")}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput("-")}>
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput("1")}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput("2")}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput("3")}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput("+")}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, { flex: 2 }]} onPress={() => handleNumberInput("0")}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(".")}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleEquals}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/ashukr321') }}>
          <Text style={styles.text}>
            Copyright 2024 @ashukr321🧑‍💻
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  display: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "white",
    padding: 20,
  },
  displayText: {
    fontSize: 40,
    color: "#000",
  },
  buttons: {
    flex: 4,
    backgroundColor: "purple",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
  },
  text: {
    textAlign: "center",
    padding: 10,
    color: "white",
    borderRadius: 5,
  },
});

export default CalculatorApp;
