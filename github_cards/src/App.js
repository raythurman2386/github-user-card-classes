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
    return (
      <>
        <Card user={this.state.user} />
        <HeaderStyles>My Github Followers</HeaderStyles>
        <AppWrapper>
          {this.state.followers &&
            this.state.followers.map(follower => <Card user={follower} />)}
        </AppWrapper>
      </>
    )
  }
}

export default App

const HeaderStyles = styled.h1`
  text-align: center;
  border-bottom: 1px solid gray;
  padding: 2rem 0;
`

const AppWrapper = styled.div`
  max-width: 1280px;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`
