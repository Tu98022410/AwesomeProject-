import React,{useState} from "react";
import styled from 'styled-components'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const Icons = styled.View`
width:  ${(props) => `${props.width}`};
`
export const Header = () => {
  const [togle,steTogel] = useState("false")
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
      <Icons style={styles.header} width="80px">
        <Image source={require('../icon/menu.png')} />
        <Image source={require('../icon/logo.png')} /></Icons>

      <Icons style={styles.header} width='150px'>
        <Image source={require('../icon/search.png')} />
        <Image source={require('../icon/user.png')} />
        <Text style={styles.pro}>MY Profile</Text>
      </Icons>
    </View>
  );
};

const styles = StyleSheet.create({
  pro: {
    fontStyle: "normal",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  menu: {
    // display:"flex",
    position:"absolute",
    width:"100%",
    height:"100%",
    // flex:1,
    background: '#072D4B',
  },
});
