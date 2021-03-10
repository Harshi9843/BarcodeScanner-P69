import React from 'react';
import {View, Text,Image, StyleSheet} from 'react-native';
import ScanScreen from './screens/ScanScreen'
import Barcode from './assets/Barcode.jpg'

export default class App extends React.Component{
  render(){
    return(
    
      <View>
        <Image source={Barcode} style={styles.image}/>

        <Text style = {styles.header}>Bar Code Scanner</Text>

        <ScanScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    width: 200, 
    height: 200,
    marginLeft: 600,
    marginTop: 150
  },

  header:{
    marginLeft: 650,
    fontFamily: 'bold',
    textDecorationLine: 'underline',
    fontSize: 30
  }
})
