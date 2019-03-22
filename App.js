/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import BeaconBroadcast from './android'
import React, {Component} from 'react';
import {Platform, 
       StyleSheet, 
       Text,
       View,
       TouchableOpacity
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {texto:"Beacon Desligado!", btn_txt:"Ligar"}
    this.ligarBeacon = this.ligarBeacon.bind(this)
    

  }
  
  ligarBeacon(){
    if(this.state.btn_txt=="Ligar")
    {
      try{
      console.log('Beacon Ligado Start');
      this.state.texto="Beacon Ligado";
      this.state.btn_txt="Desligar";
      this.setState(this.state);
      BeaconBroadcast.startAdvertisingBeaconWithString("ffffffff-FFFF-FFFF-FFFF-FFFFFFFFFFFF", "pullup", 5112, 5112);
      console.log('Beacon Ligado End');
      }
      catch(erro){
        console.log('Erro Beacon Ligado');
        reject(erro);
      }
    }
    else{
      try{
      console.log('Beacon Desligado Start');
      this.state.texto="Beacon Desligado!";
      this.state.btn_txt="Ligar";
      this.setState(this.state);
      BeaconBroadcast.stopAdvertisingBeacon();
      BeaconBroadcast.checkTransmissionSupported();
      console.log('Beacon Desligado End');
      }
      catch(erro){
        console.log('Erro Beacon Desligado');
        reject(erro);
      }
      
    }
    
  }
  
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Teste Beacon! </Text>
        <Text style={styles.instructions}>{this.state.texto}</Text>
        
        <TouchableOpacity onPress={this.ligarBeacon} style={styles.button}><Text>{this.state.btn_txt}</Text></TouchableOpacity>     
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
    fontSize: 50,
    marginTop:30,
    color: '#333333',
  }
});
