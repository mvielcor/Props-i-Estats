import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Header, Button} from 'react-native-elements';

export class Targeta extends Component {
  render() {
    return (
      <>
        <View style={{padding: 10}}>
          <View style={[styles.directo,styles.ombra]}>
            <View style={{alignItems: 'center'}}>
              <Text>{this.props.eLocal}</Text>
              <Text>{this.props.rLocal}</Text>
            </View>
            <View style={{alignSelf: 'flex-start'}}>
              <Text>+Apuestas</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text>{this.props.eVisitant}</Text>
              <Text>{this.props.rVisitant}</Text>
            </View>
          </View>
          <View style={[styles.cabecera,styles.ombra]}>
            <View>
              <Text>+ 2.5</Text>
              <Text style={{color: 'green', fontWeight: 'bold'}}>2.3€</Text>
            </View>
            <View></View>
            <View>
              <Text style={{fontSize: 16}}>- 2.5</Text>
              <Text style={{color: 'green', fontWeight: 'bold'}}>2.3€</Text>
            </View>
          </View>
        </View>
        </>
    );
  }
}
const styles = StyleSheet.create({
  directo: {
    marginTop: 20,
    marginLeft: 25,
    backgroundColor: '#ebdb93',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    
  },
  cabecera: {
    marginLeft: 25,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 75,
  },
  ombra: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
