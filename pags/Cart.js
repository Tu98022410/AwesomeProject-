import React, {useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
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
  TouchableOpacity,
} from 'react-native';
const Container = styled.View`
  margin-top: 20px;
  height: 164px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  background: #ffffff;
`;
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 110,
    borderRadius: 4,
    // marginBottom:10
  },
  BigText: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 20,
    color: '#072D4B',
  },
  SmallText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: '#3d4b57',
  },
});
export const Cart = ({data, index}) => {
  const navigation = useNavigation();
  const Title = useMemo(
    () =>
      data?.title?.length > 70
        ? data?.title?.substring(0, 70) + '...'
        : data.title,
    [data],
  );
  const Description = useMemo(
    () =>
      data?.description?.length > 180
        ? data?.description?.substring(0, 180) + '...'
        : data.description,
    [data],
  );
  const SmallDes = useMemo(
    () =>
      data?.description?.length > 80
        ? data?.description?.substring(0, 100) + '...'
        : data.description,
    [data],
  );
  return (
    <TouchableOpacity
      onPress={() => {
        navigation?.navigate('Post', {
          id: data?.id,
          data: data,
        });
      }}>
      <Container
        style={{
          justifyContent: 'space-around',
          paddingTop: 10,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
        }}>
        {data.image ? (
          <View key={index}>
            <View style={{flexDirection: 'row', width: 240}}>
              <View style={{flexDirection: 'column', width: 240}}>
                <Text style={styles.BigText}>{Title}</Text>
                <Text style={styles.SmallText}>{SmallDes}</Text>
              </View>
              <Image source={{uri: data.image}} style={styles.image} />
            </View>
            <View style={{width: 320, flexDirection: 'row-reverse',marginTop:10}}>
              <Image
                style={{marginLeft: 25}}
                source={require('../icon/pocket.png')}
              />
              <Image source={require('../icon/share.png')} />
            </View>
          </View>
        ) : (
          <Text style={styles.SmallText}>{Description}</Text>
        )}
      </Container>
    </TouchableOpacity>
  );
};
