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

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  logMe = () => { console.log(this.props.name) }

  render() {
    return (
      <View>
        <Text>{this.props.name} count: {this.state.count}</Text>
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
