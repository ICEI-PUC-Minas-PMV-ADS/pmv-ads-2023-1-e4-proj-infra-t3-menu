import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SearchButton = ({ onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onPress();
  };

  const handleRelease = () => {
    setIsPressed(false);
  };

  const buttonStyles = isPressed ? styles.buttonPressed : styles.button;

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={handlePress}
      onPressOut={handleRelease}
    >
      <Text style={styles.buttonText}>Atualizar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f5301f',
    padding: 10,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#c02a1d',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SearchButton;
