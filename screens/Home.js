import React, {useState, useEffect} from 'react';
import Header from './header';
import axios from 'axios';
import {Card, Title} from 'react-native-paper';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
const Home = props => {
  const [name, setName] = useState('Loading...');
  const [description, setDescription] = useState('Loading...');
  const [wind, serWind] = useState('Loading..');
  const [icon, setIcon] = useState('Loading...');
  // const [citynew, setCitynew] = useState('');
  useEffect(() => {
    const getDetails = async () => {
      //let city = AsyncStorage.getItem('new');
      const {city} = props.route.params;
      let myCity = city;
      console.log(myCity);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=28c0706c542339f2f649a7cedc641831`,
        )
        .then(response => {
          setName(response.data.name);
          setDescription(response.data.weather[0].description);
          serWind(response.data.wind.speed);
          setIcon(response.data.weather[0].icon);
        })
        .catch(function (error) {
          console.log(error);
        });
      // setCitynew('');
      myCity = '';
    };
    getDetails();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#edecec'}}>
      <Header place={name} />
      <View style={styles.container}>
        <Image
          style={{
            width: 300,
            height: 300,

            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={{
            uri: 'https://openweathermap.org/img/w/' + icon + '.png',
          }}
        />
      </View>
      <Card style={styles.card}>
        <Title style={styles.cardItem}>{name}</Title>
      </Card>
      <Card style={styles.card}>
        <Title style={styles.cardItem}>Wind speed is {wind}</Title>
      </Card>
      <Card style={styles.card}>
        <Title style={styles.cardItem}>{description}</Title>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    elevation: 100,
  },
  card: {
    margin: 10,
    padding: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,

    borderWidth: 2,
    borderColor: '#00aaff',
  },
  cardItem: {
    fontSize: 20,
    color: '#00aaff',
  },
});
export default Home;
