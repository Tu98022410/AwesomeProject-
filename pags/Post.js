import React, {useEffect} from 'react';
import {Data} from './data';
import {useNavigation} from '@react-navigation/native';
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
  ImageBackground,
} from 'react-native';
import {Header} from './Header';

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  BigText: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 26,
    lineHeight: 36,
    color: ' #072D4B',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
  },
  Des: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 24,
    color: '#072D4B',
    marginTop: 30,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 4,
  },
  footer: {
    width: "100%",
    height: 100,
  },
});

export const Post = ({index, route}) => {
  const {id, data} = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const getPostDetail = async () => {
      const res = await instance.get(`/${id}`);
      setData(res.data.message);
    };
    getPostDetail();
  }, [id]);
  console.log(data.image);
  return (
    <SafeAreaView>
      <Header />
      <View style={{alignItems: 'center'}}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.BigText}>{data.title}</Text>
            <Image source={{uri: data.image}} style={styles.image} />
            <Text style={styles.Des}>{data.description}</Text>
            <View style={styles.footer}></View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
