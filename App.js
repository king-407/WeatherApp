/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import Search from './screens/Search';
import Home from './screens/Home';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#00aaff"
      />
      {/* <Search/> */}
      {/* <Home /> */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'home') {
                iconName = 'city-variant';
              } else if (route.name === 'search') {
                iconName = 'home-search-outline';
              }
              return <MaterialCommunityIcons name={iconName} size={40} />;
            },
          })}
          tabBarOption={{
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            activeBackgroundColor: '#00aaff',
          }}>
          <Tab.Screen name="search" component={Search} />
          <Tab.Screen name="home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
