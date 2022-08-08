import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
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
