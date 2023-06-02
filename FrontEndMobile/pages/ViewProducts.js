import React, { useEffect, useState } from 'react';
import SearchButton from '../components/SearchButton';
import {getAllProducts} from '../services/product.services';
import Logo from '../components/Logo';
const statusBarHeight = StatusBar.currentHeight;

import { View, FlatList, StyleSheet, SafeAreaView, ImageBackground, StatusBar } from 'react-native';
import { List, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';


const ViewProducts = () => {
  const navigation = useNavigation();    
  const [products, setProducts] = useState([]);

  const handleFetchProducts = () => {
    fetchProducts();
  };

  const fetchProducts = async () => {
    try {                         
      const response = await getAllProducts();                        
      setProducts(response);      
    } catch (error) {       
      console.error('Erro ao buscar os produtos:', error);
    }
  };  
  
  useEffect(() => {    
    handleFetchProducts();
  }, []);
 
  return (
    <ImageBackground
      source={require('../assets/background2.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>        

        <Text style={styles.text1}>Lista de Produtos</Text>
        
        <SearchButton onPress={handleFetchProducts} />

        <View style={styles.header}>
          <Text style={styles.idColumn}>
            #
          </Text>
          <Text style={styles.descriptionColumn}>
            Produto
          </Text>
          <Text style={styles.valueColumn}>
            Preço
          </Text>
        </View>

        {/* <View style={styles.separator} />  */}

        <View style={styles.row}>
          <FlatList            
            data={products}
            keyExtractor={(product) => product.id.toString()}
            renderItem={({ item, index }) => (
              <View style={[styles.itemContainer, index % 2 === 0 ? styles.evenItem : styles.oddItem,]}>
                <Text style={styles.idColumn2}>{item.id}</Text>                
                <Text style={styles.descriptionColumn2}>{item.name}</Text>                
                <Text style={styles.valueColumn2}>{item.price.toFixed(2)}</Text>                
              </View>                            
            )}            
          />
        </View>
        
      </SafeAreaView>
    </ImageBackground>        

  );

};

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#10101010',
        // backgroundColor: 'black',

    },

    container: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? statusBarHeight : 2,
    },
    row: {
        width: '100%',
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    backgroundImage: {
        flex: 1,
        height: '100%',
        resizeMode: 'cover',
    },
    logo: {
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 12,
    },
    content: {
        alignSelf: 'center',
        flex: 1,
        fontSize: 'large',
        borderRadius: 5,
        borderWidth: 1,
        margin: 10,
        borderColor: '#FF0000',
        padding: 0,
        width: '100%',
        height: '100%',
        marginBottom: 10,
        backgroundColor: 'white',
        alignContent: 'center',
        flexDirection: 'row',
    },
    text1: {
        marginBottom: 10,
        color: 'white',
        alignSelf: 'center',
        fontSize: 25
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 0,
        backgroundColor: 'white',
    },
    // Estilo para a coluna de descrição
    descriptionColumn: {
        flex: 4, // Define a largura da coluna de descrição como o quadruplo da largura das outras colunas
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'Black',
        backgroundColor: 'white',
        paddingLeft: 5,
    },
    // Estilo para a coluna id
    idColumn: {
        flex: 1, // Define a largura da coluna id como metade da largura das outras colunas
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'Black',
        backgroundColor: 'white',
    },
    // Estilo para a coluna de valor
    valueColumn: {
        flex: 2, // Define a largura da coluna de valor como o dobro da largura das outras colunas
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'Black',
        backgroundColor: 'white',
        paddingRight: 10,
    },
    // Estilo para a coluna de descrição
    descriptionColumn2: {
        flex: 4, // Define a largura da coluna de descrição como o dobro da largura das outras colunas  
        textAlign: 'left',
        color: 'Black',
        backgroundColor: 'white',
        paddingLeft: 5,
        fontSize: 17,
    },
    // Estilo para a coluna de quantidade
    idColumn2: {
        flex: 1, // Define a largura da coluna id como metade da largura das outras colunas  
        textAlign: 'center',
        color: 'Black',
        backgroundColor: 'white',
        fontSize: 17
    },
    // Estilo para a coluna de valor
    valueColumn2: {
        flex: 2, // Define a largura da coluna de valor como o dobro da largura das outras colunas  
        textAlign: 'right',
        color: 'Black',
        backgroundColor: 'white',
        fontSize: 17,
        paddingRight: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        alignItems: 'center',
        paddingHorizontal: 2,
        paddingVertical: 2,
    },
    evenItem: {
        backgroundColor: 'lightgray',
      },
      oddItem: {
        backgroundColor: 'white',
      },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 0,
        marginTop: 0,    
      }, 
});  

export default ViewProducts;