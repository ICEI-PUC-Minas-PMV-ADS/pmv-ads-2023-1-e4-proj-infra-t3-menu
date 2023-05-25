import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';



const Home = () => {
  const [index, setIndex] = useState(0);
  


  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;