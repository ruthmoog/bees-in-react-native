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
- If I click the button I want to `console.log` to see something happened.  In this code, JS runs through and thinks its job is done.  No matter how many times you click the button, it won't log to console again as the page isn't being re-rendered and the code has already been run.  Instead, you want to pass `onPress` a function so that it can be run over and over again
```JavaScript
// Console log just the once & put yer feet up:
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Button 
        title="click me"
        onPress={console.log(this.props.name)}
          />
      </View>
      )
    }
  }

  // JS stays ready for orders whenever you press that button...
    render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Button 
        title="click me"
        onPress={ () => { console.log(this.props.name) }}
          />
      </View>
      )
    }
  }
  ```
- Ok so lets SRP this sucker and extract the log function out of the View:
```JavaScript
// here's the function inside BeeTracker
logMe = () => { console.log(this.props.name) }

// and this is how you tell JS what func to run onPress (don't execute the func like `logMe()`, just tell JS to run it when the button is pressed)
onPress={ this.logMe }
```
- we want to render the count alongside the bees so we need to set initial state by adding our count to the constructor like so:
```JavaScript
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
```
then it'll be possible to render the count:
```JavaScript
<Text>{this.props.name} count: {this.state.count}</Text>

```
