import React, { Component } from 'react'

class App extends Component {
  // set up state for my card data
  state = {
    data: [],
  }

  // componentDidMount to fetch data
  componentDidMount() {
    fetch('https://api.github.com/users/raythurman2386/')
      .then(res => res.json())
      .then(data => this.setState({ data: data.message }))
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default App
