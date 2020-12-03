import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Header, CheckBox} from 'react-native-elements';

export default class Mercats extends Component {
  constructor() {
    super();
    this.state = {
      under: false,
      over: false,
      mercat: 0,
      quotaUnder05: 9.3,
      quotaUnder15: 8.3,
      quotaUnder25: 7.3,
      quotaOver05: 2.5,
      quotaOver15: 3.5,
      quotaOver25: 4.5,
    };
  }

  estableixUnder(e, value) {
     //console.log('hola'+value);
    this.setState({under: true, mercat: value});
  }
  estableixUnder2(e, value) {
    console.log('hola'+value);
   //this.setState({under: true, mercat: value});
 }


  render() {
    return (
      <View>
        <Text>Mercats</Text>
        <CheckBox
          center
          title="under 0,5"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={true}
          onPress={()=>console.log('hola tu')}
        />
        <CheckBox
          center
          title="under 1,5"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.under}
          onPress={this.estableixUnder.bind(this, 15)}
        />
        <CheckBox
          center
          title="under 2,5"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={this.state.under}
          onPress={this.estableixUnder.bind(this, 25)}
        />
      </View>
    );
  }
}
