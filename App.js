import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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

  logMe = () => { console.log(this.props.name) }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Button 
        title="click me"
        onPress={ this.logMe }
          />
      </View>
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
