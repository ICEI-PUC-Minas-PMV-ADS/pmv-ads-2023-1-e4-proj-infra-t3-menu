import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import PageHome from '../pages/PageHome';

const NavigationHome = () => {
  const [index, setIndex] = useState(1);
  
  const [routes] = useState([
    { key: 'Home', title: 'Home', icon: 'calendar-account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    agenda: ViewAgenda,
    Home: PageHome,    
    photo: CapturePhoto,
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