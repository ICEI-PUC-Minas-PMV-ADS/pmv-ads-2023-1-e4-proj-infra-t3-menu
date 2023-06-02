import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import PageHome from '../pages/PageHome';
import ViewOrders from '../pages/ViewOrders';
import ViewProducts from '../pages/ViewProducts';

const NavigationHome = () => {
  const [index, setIndex] = useState(2);
  
  const [routes] = useState([
    { key: 'Home', title: 'Home', icon: 'calendar-account' },
    { key: 'Products', title: 'Produtos', icon: 'calendar-account' }, 
    { key: 'Orders', title: 'Pedidos', icon: 'calendar-account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: PageHome,     
    Products: ViewProducts,
    Orders: ViewOrders,    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavigationHome;