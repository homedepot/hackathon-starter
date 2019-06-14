import React, { Component } from 'react'
import openSocket from 'socket.io-client'

export default class WishGalaxy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      wishGalaxy: []
    }
  }

  componentDidMount() {
    this.socket = openSocket('http://localhost:3002')

    this.socket.on('wish', data => {
      this.setState({ wishGalaxy: this.state.wishGalaxy.concat(data) })
    })
  }

  componentWillUnmount() {
    this.socket.close()
  }

  render() {
    return (
      <div>
        Wish Galaxy:{' '}
        {this.state.wishGalaxy.map(wish => (
          <div>{wish}</div>
        ))}
      </div>
    )
  }
}
