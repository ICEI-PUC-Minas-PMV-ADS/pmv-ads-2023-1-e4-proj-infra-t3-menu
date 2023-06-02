import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, FlatList, ScrollView } from 'react-native';
import {
  Button,
  Appbar,
} from 'react-native-paper';
import moment from 'moment';
import Logo from '../components/Logo';
import {updateStatusOrder} from '../services/orders.services';

// import DateTimePicker from '@react-native-community/datetimepicker';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import { useNavigation } from '@react-navigation/native';

const EditOrder = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};
  const [orderingDate, setOrderingDate] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [orderingHour, setOrderingHour] = useState(null);
  const [statusOrder, setStatusOrder] = useState(null);
  const [totalValue, setTotalValue] = useState(null);
  const [products, setProducts] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    if (item) {   
      const formattedDate = moment(item.orderingDate).format('DD/MM/YYYY');
      setOrderingDate(formattedDate);

      const orderingDateTime = moment(item.orderingDate);
      const hour = orderingDateTime.format('HH:mm');
      setOrderingHour(hour);

      setStatusOrder(item.statusOrder);
      setTotalValue(item.totalValue);
      setProducts(item.products);
      setCliente([item.user]);
      setOrderId(item.id);
    }
  }, [item]);

  const handleAlterStatus = async (statusOrder) => {    
    await updateStatusOrder({statusOrder: statusOrder, orderId: orderId})
    .then( res => {      
      if(res === 200) {        
        setStatusOrder(statusOrder)
      }
      else {
        console.log('erro na atualização do status');        
      }
    });
  }

  return (
    <Container>      
      {/* <View style={styles.View}>
        <Text style={styles.titleScreen}>
          COOKING DIGITAL
        </Text>
      </View> */}

      <View style={styles.logo}>
          <Logo />
          <Text style={styles.text1}>Página em construção</Text>
        </View>

      <Body>
        <Text style={styles.titleSector}>
          INFORMAÇÕES DO CLIENTE
        </Text>

        {cliente !== null &&
          <View style={styles.View}>
            <Text style={styles.labelBlack}>
              Nome: {cliente[0].name}
            </Text>
            <View style={styles.separator} />
            <Text style={styles.labelBlack}>
              e-mail: {cliente[0].email}
            </Text>
          </View>}

        <Text style={styles.titleSector}>{"INFORMAÇÕES DO PEDIDO:"} {orderId}</Text>          

        <View style={styles.header}>
          <Text style={styles.columnHeader}>
            #
          </Text>
          <Text style={styles.columnHeader}>
            Data
          </Text>
          <Text style={styles.columnHeader}>
            Hora
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <Text style={styles.labelBlack2}>
            {statusOrder}
          </Text>
          <Text style={styles.labelBlack2}>
            {orderingDate}
          </Text>
          <Text style={styles.labelBlack2}>
            {orderingHour}
          </Text>
        </View>
        
        <Text style={styles.titleSector}>{"ÍTENS DO PEDIDO:"}</Text>   
        <View style={styles.header}>
          <Text style={styles.descriptionColumn}>
            Produto
          </Text>
          <Text style={styles.quantityColumn}>
            Qtde
          </Text>
          <Text style={styles.valueColumn}>
            Valor
          </Text>
        </View>
        <View style={styles.separator} />             
        <View style={styles.row}>
          <FlatList            
            data={products}
            keyExtractor={(product) => product.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.descriptionColumn2}>{item.name}</Text>
                <Text style={styles.quantityColumn2}>{item.quantity}</Text>
                <Text style={styles.valueColumn2}>{item.price.toFixed(2)}</Text>
              </View>
            )}
          />
        </View>


        {totalValue !== null && (
          <View style={styles.View}>
            <Text style={{ marginRight: 10, fontWeight: 'bold', textAlign: 'right', fontSize: 25 }}>
              VALOR TOTAL: R$ {totalValue.toFixed(2)}
            </Text>
          </View>
        )}
        
        {statusOrder === 'Aguardando inicio' ? (
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => handleAlterStatus('Em andamento')}
          >
            Aprovar Pedido
          </Button>
        ) : null}

        {statusOrder === 'Em andamento' ? (
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => handleAlterStatus('Finalizado')}
          >
            Finalizar Pedido
          </Button>
        ) : null}        

      </Body>

      <Header title={'Pedidos'} goBack={() => navigation.goBack()}>
        {/* <Appbar.Action icon="check" onPress={handleSalvar} /> */}
        {
          
        }

      </Header>
    </Container>
  );
};

const styles = StyleSheet.create({  
  logo: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
  Header: {
    backgroundColor: 'red',
  },
  button: {
    marginBottom: 8,
    backgroundColor: '#228B22',
  },
  labelWhite: {    
    marginBottom: 5,
    color: 'white',
    textAlign: 'center',
  },  
  labelBlack: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
    color: 'Black',        
    fontSize: 18,
  },
  View: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF0000',
    marginTop: 8,
    width: '100%',
    marginBottom: 10,
    fontSize: 15,
    // borderRadius: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginBottom: 0,
    marginTop: 0,    
  },  
  
  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
    backgroundColor: 'white',    
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
    marginBottom: 10,
  },  
  labelBlack2: {
    flex: 1,
    textAlign: 'center',
    color: 'Black', 
    backgroundColor: 'white',
    fontSize: 18,
  },  
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',            
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
  // Estilo para a coluna de quantidade
  quantityColumn: {
    flex: 1, // Define a largura da coluna de quantidade como metade da largura das outras colunas
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'Black', 
    backgroundColor: 'white',
  },
  // Estilo para a coluna de valor
  valueColumn: {
    flex: 2, // Define a largura da coluna de valor como o dobro da largura das outras colunas
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'Black', 
    backgroundColor: 'white',
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
quantityColumn2: {
  flex: 1, // Define a largura da coluna de quantidade como metade da largura das outras colunas  
  textAlign: 'center',
  color: 'Black', 
  backgroundColor: 'white',
  fontSize: 17
},
// Estilo para a coluna de valor
valueColumn2: {
  flex: 2, // Define a largura da coluna de valor como o dobro da largura das outras colunas  
  textAlign: 'center',
  color: 'Black', 
  backgroundColor: 'white',
  fontSize: 17
},  

titleSector: {    
  marginBottom: 5,
  color: 'white',
  textAlign: 'center',
  fontSize:23
},

titleScreen: {
  marginTop: 50,
  marginBottom: 20,
  color: 'black',
  textAlign: 'center',
  fontSize:23,
  backgroundColor: 'white',
  fontWeight: 'bold',
}

});

placeholderStyles: {
  backgroundColor: 'grey'

}

export default EditOrder;
