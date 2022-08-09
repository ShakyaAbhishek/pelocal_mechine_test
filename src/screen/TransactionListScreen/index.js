import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';
import useApi from '../../compenents/customHooks';

const TransactionListScreen = () => {
  const {loading, data} = useApi(
    'https://jsonplaceholder.typicode.com/users',
    {method: 'GET'},
    true,
  );

  return (
    <View style={Styles.container}>
      <Text>TransactionListScreen</Text>
    </View>
  );
};

export default TransactionListScreen;
