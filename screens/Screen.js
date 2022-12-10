import React from 'react';


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
    TouchableOpacity
  } from 'react-native';

  export default class Screen extends React.Component{
    react(){
        return(
            <View style={{flex:1}}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity style={{alignItems:"flex-end",margin:16 }} onPress={this.props.navigation.openDrawer}></TouchableOpacity>
                </SafeAreaView>
                <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{}}>{this.props.mane}bcurhv</Text>
                </View>
            </View>
        )
    }
  }