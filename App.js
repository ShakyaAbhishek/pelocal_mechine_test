import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import useApi from './src/compenents/customHooks';

const App = () => {
  const {loading, data} = useApi(
    'https://staging.pelocal.com/api/v2/consumer/payments/transaction/',
    'GET',
    true,
  );
  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  console.log("api data", JSON.stringify(data, undefined, 2));

  return (
    <View style={styles.container}>
      <Text>Pelocal mechine Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
