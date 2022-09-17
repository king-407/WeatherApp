import React, {useState, useEffect} from 'react';
import Header from './header';
import {Button, getCombinedStyles, Card} from 'react-native-paper';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
const Search = ({navigation}) => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  // const getCities = city => {
  //   setCity(city);
  //   axios
  //     .get(
  //       'http://api.weatherstack.com/current?access_key=ee5b436ad1fc20c62a2854bec2f44eae&query=' +
  //         city,
  //     )
  //     .then(response => {
  //       setCities(response.data.location);
  //       console.log(cities);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const getWeather = async () => {
    // axios
    //   .get(
    //     'https://api.openweathermap.org/data/2.5/weather?q=' +
    //       city +
    //       '&appid=28c0706c542339f2f649a7cedc641831',
    //   )
    //   .then(response => {
    //     setCities(response.data.name);
    //     console.log(cities);
    //     console.log(response.data.weather[0].icon);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //await AsyncStorage.setItem('new', city);
    // console.log(city);
    navigation.navigate('home', {city: city});
  };

  return (
    <View style={styles.body}>
      <Header place="Weather ☁️ ☁️ ☁️" />
      <View style={styles.imageCover}>
        <Image style={styles.image} source={require('../assets/cloudy.png')} />
      </View>
      <Text style={styles.baahar}>City</Text>
      <TextInput style={styles.input} onChangeText={text => setCity(text)} />
      <Button
        icon="content-save"
        mode="contained"
        onPress={getWeather}
        theme={{
          colors: {
            primary: '#00aaff',
          },
        }}
        style={{margin: 20}}>
        <Text style={{color: 'white'}}>Press me</Text>
      </Button>
      {/* <FlatList
        data={cities}
        renderItem={({item}) => {
          return (
            <Card style={{margin: 2, padding: 12}}>
              <Text>{item.name}</Text>
            </Card>
          );
        }}
        keyExtractor={item => item.lon}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#00aaff',
  },
  baahar: {
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  imageCover: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // body: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});
export default Search;
