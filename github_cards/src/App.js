import React, { Component } from 'react'
import styled from 'styled-components'

import MyCard from './components/MyCard'
import Card from './components/Card'

class App extends Component {
  // set up state for my card data
  state = {
    user: [],
    followers: [],
    isVisible: false,
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

  handleChange = e => {
    this.setState({
      isVisible: !this.state.isVisible,
    })
  }

  render() {
    return (
      <>
        <MyCard user={this.state.user} />
        <HeaderStyles onClick={this.handleChange}>
          My Github Followers
        </HeaderStyles>
        <AppWrapper>
          {this.state.isVisible &&
            this.state.followers.map((follower, index) => (
              <Card user={follower} key={index} />
            ))}
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
  color: white;
  cursor: pointer;
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
