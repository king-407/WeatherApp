import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
const Header = props => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#00aaff',
        },
      }}
      style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Title style={styles.container}>{props.place}</Title>
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  container: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
  },
});
export default Header;
