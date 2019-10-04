import React, { Component } from 'react'

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
      <div>
        <Card user={this.state.user} />
      </div>
    )
  }
}

export default App
