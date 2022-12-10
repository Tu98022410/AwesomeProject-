import React from 'react';
import styled from 'styled-components';
import {Header} from './Header';
import {Cart} from './Cart';
import {Data} from './data';
import {Post} from './Post';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Switch,
  Alert,
} from 'react-native';

const Container = styled.View`
  padding: 20px;
`;
const Icons = styled.View`
  width: ${props => `${props.width}`};
`;
export const HomeScreen = ({navigation}) => {
  const myToken = async () => {
    const myToken = await AsyncStorage.getItem('auth_token');
    alert('auth token' + myToken);
  };
  const setToken = async () => {
    try {
      await AsyncStorage.setItem('auth_token', '12345678');
      alert('yawuulsan');
    } catch (e) {
      alert(e);
    }
  };
  const ClearToken = async () => {
    AsyncStorage.clear();
    alert('hoosolson');
  };
  return (
    // <LottieView
    //   source={require('../icon/85729-world-map.json')}
    //   autoPlay
    //   loop={true}
    //   speed={1.7}
    // />
    <SafeAreaView>
      <Header />
      <Button title="getItem" onPress={() => myToken()} />
      <Button title="setItem" onPress={() => setToken()} />
      <Button title="clearItmes" onPress={() => ClearToken()} />
      <Container>
        <ScrollView>
          <Text style={styles.top}>Top Stories for you</Text>
          {Data.map((el, index) => {
            return <Cart data={el} index={index} />;
          })}
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pro: {
    fontStyle: 'normal',
  },
  top: {
    fontWeight: 'bold',
    // fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23,
    color: '#072D4B',
  },
});
