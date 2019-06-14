import React, { Component } from 'react'
import openSocket from 'socket.io-client'

export default class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wish: ''
    }
  }

  componentDidMount() {
    this.socket = openSocket('http://localhost:3002')
  }

  componentWillUnmount() {
    this.socket.close()
  }

  handleFormFieldChange = (key, { target: { value } }) => {
    this.setState({ [key]: value })
  }

  handleFormSubmit = e => {
    e.preventDefault()

    const { wish } = this.state

    this.socket.emit('wish', wish)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h2>Enter wish!</h2>
        <input
          type="text"
          data-wish
          onChange={event => this.handleFormFieldChange('wish', event)}
        />

        <input type="submit" value="Submit!" />
      </form>
    )
  }
}
