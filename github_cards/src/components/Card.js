import React from 'react'
import styled from 'styled-components'

const Card = props => {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <img src={props.user.avatar_url} alt={props.user.name} />
      <h2>{props.user.login}</h2>
      <p>{props.user.location}</p>
      <p>{props.user.company}</p>
      <p>{props.user.blog}</p>
      <p>{props.user.bio}</p>
    </div>
  )
}

export default Card
