import React, { Component } from 'react'
import styled from 'styled-components'

import Card from './components/Card'

class App extends Component {
  // set up state for my card data
  state = {
    user: [],
    followers: [],
  }

  // componentDidMount to fetch data
  componentDidMount() {
    fetch('https://api.github.com/users/raythurman2386')
      .then(res => res.json())
      .then(data => this.setState({ user: data }))
      .catch(err => console.log(err.response))

    fetch('https://api.github.com/users/raythurman2386/followers')
      .then(res => res.json())
      .then(data => this.setState({ followers: data }))
      .catch(err => console.log(err.response))
  }

  render() {
    console.log(this.state.followers)
    return (
      <AppWrapper>
        <Card user={this.state.user} />
        {this.state.followers &&
          this.state.followers.map(follower => <Card user={follower} />)}
      </AppWrapper>
    )
  }
}

export default App

const AppWrapper = styled.div`
  max-width: 1280px;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
`
