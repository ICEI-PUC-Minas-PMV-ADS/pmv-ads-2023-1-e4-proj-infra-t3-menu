import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import PageHome from '../pages/PageHome';
import ViewOrders from '../pages/ViewOrders'

const NavigationHome = () => {
  const [index, setIndex] = useState(1);
  
  const [routes] = useState([
    { key: 'Home', title: 'Home', icon: 'calendar-account' },
    { key: 'Orders', title: 'Orders', icon: 'calendar-account' } 
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Orders: ViewOrders,
    Home: PageHome,        
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