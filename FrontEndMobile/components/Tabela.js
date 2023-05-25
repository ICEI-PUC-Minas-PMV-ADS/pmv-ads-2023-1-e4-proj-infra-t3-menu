import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Tabela = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (itemValue) => {
    setSelectedOption(itemValue);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.cell}>#</Text>
        <Text style={styles.cell}>Data</Text>
        <Text style={styles.cell}>Fila</Text>
        <Text style={styles.cell}>Status</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>104245576</Text>
        <Text style={styles.cell}>14/03/23 19:57:23</Text>
        <Text style={styles.cell}>4</Text>
        <Text style={styles.cell}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={handleOptionChange}
            style={styles.picker}>
            <Picker.Item label="Pendente" value="opcao1" />
            <Picker.Item label="Em andamento" value="opcao2" />
            <Picker.Item label="Concluído" value="opcao3" />
            <Picker.Item label="Cancelado" value="opcao4" />
          </Picker>
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>145931564</Text>
        <Text style={styles.cell}>13/02/23 21:34:56</Text>
        <Text style={styles.cell}>8</Text>
        <Text style={styles.cell}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={handleOptionChange}
            style={styles.picker}>
            <Picker.Item label="Pendente" value="opcao5" />
            <Picker.Item label="Em andamento" value="opcao6" />
            <Picker.Item label="Concluído" value="opcao7" />
            <Picker.Item label="Cancelado" value="opcao8" />
          </Picker>
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>159725463</Text>
        <Text style={styles.cell}>25/09/22 14:28:33</Text>
        <Text style={styles.cell}>2</Text>
        <Text style={styles.cell}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={handleOptionChange}
            style={styles.picker}>
            <Picker.Item label="Pendente" value="opcao9" />
            <Picker.Item label="Em andamento" value="opcao10" />
            <Picker.Item label="Concluído" value="opcao11" />
            <Picker.Item label="Cancelado" value="opcao12" />
          </Picker>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    width: '100%',
    alignContent: 'center',
    flexDirection: 'row',
  },
  picker: {
    flex: 1, 
    width: 200,
    height: 70,
    padding: 10,
    marginLeft: 20,  
    borderRadius: 10, 
  },
  cell: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#FF0000',
    padding: 10,
    paddingBottom: 30,
  },
});

export default Tabela;
