import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()

class TextProvider extends Component {
  state = {
    user: []
  }

  componentDidMount(){}

  render(){
    return (
      <Provider value={{
          ...this.state
        }}
        >
        {this.props.children}
      </Provider>
    )
  }
}


const TextConsumer = Consumer
export { TextProvider, TextConsumer }
