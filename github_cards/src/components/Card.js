import React from 'react'
import styled from 'styled-components'

const Card = props => {
  return (
    <Wrapper>
      <h1>{props.user.name}</h1>
      <img src={props.user.avatar_url} alt={props.user.name} />
      <h2>{props.user.login}</h2>
      <p>{props.user.location}</p>
      <p>{props.user.company}</p>
      <p>{props.user.blog}</p>
      <p>{props.user.bio}</p>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  width: 250px;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: 0 10px 6px -6px #777;

  img {
    width: 98%;
  }

  :hover {
    box-shadow: 0 10px 16px -6px #777;
    transition: 0.4s ease;
  }
`
