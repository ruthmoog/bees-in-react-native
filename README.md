- To start a new project, `expo init ProjectName`
- Make your component with a simple render function
```JavaScript
class BeeTracker extends Component {
  render() {
    return (
      <Text>Hello there</Text>
    )
  }
}
```
- When you create an instance of your component, like ```<BeeTracker name="terrestris"/>``` the name is a props you assigned to the instance.  You can access the props per instance with `this`: ``` {this.props.name}```
```JavaScript
class BeeTracker extends Component {
  render() {
    return (
      <Text>{this.props.name}</Text>
      )
    }
  }
```
- I want each bee to have it's own button, but you can only return 1 element, so wrap with `<></>` or `<View></View>`
```JavaScript
return (
  <View>
    <Text>{this.props.name}</Text>
    <Button title="i'm a button"/>
  </View>
  )
```