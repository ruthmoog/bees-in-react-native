import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Bee!</Text>
      <BeeTracker name="terrestris"/>
      <BeeTracker name="ashy mining bee"/>
    </View>
  );
}

class BeeTracker extends Component {
  render() {
    return (
      <Text>{this.props.name}</Text>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
