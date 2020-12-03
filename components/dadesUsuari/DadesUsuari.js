import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export class DadesUsuari extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date(Date.now()),
      visible: false,
    }
  }
  dataSeleccionada = (e, dataNova) => {
    if (e.type === 'set') {
      this.setState({ data: new Date(dataNova), visible: false })
    }

    if (e.type === 'dismissed') {
      //console.log('has cancel.lat')
    }
  }
  showMode = () => {

    console.log((this.state.data));
    this.setState({ visible: true });
  };
  showDatepicker = () => {
    this.showMode();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text> Data Naixement</Text>
        <Button
          onPress={this.showDatepicker}
          title={`  ${this.state.data.getDate()} - ${this.state.data.getMonth() + 1}- ${this.state.data.getFullYear()}`}
          icon={{
            name: "calendar-today",
            size: 15,
            color: "white"
          }}
          raised={true}
        />
        {this.state.visible && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.data}
            mode='date'
            display="default"
            onChange={this.dataSeleccionada}
          />
        )}
      </View>
    );
  }
}

