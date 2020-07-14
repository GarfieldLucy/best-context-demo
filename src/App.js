import React, {Component, createContext} from 'react'

// first we will make a new context
const MyContext = createContext()

// then create a provider component
class MyProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }

  render() {
    return(
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({age: this.state.age + 1})
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className='family'>
    <Person />
  </div>
)
class Person extends Component {
  render() { 
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>name: {context.state.name}</p>
              <p>age: {context.state.age}</p>
              <span onClick={context.growAYearOlder} role='img'>🦷🦷🦷</span>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <MyProvider>
        <div>
          <p>I'm the age</p>
          <Family />
        </div>
      </MyProvider>
    )
  }
}

export default App
