import React from 'react'
import styled from 'styled-components'

const Card = props => (
  <Wrapper>
    <img src={props.user.avatar_url} alt={props.user.name} />
    <h2>{props.user.login}</h2>
  </Wrapper>
)

export default Card

const Wrapper = styled.div`
  width: 250px;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: 0 10px 6px -6px #888;
  background: white;

  img {
    width: 98%;
  }

  :hover {
    box-shadow: 0 10px 26px -6px crimson;
    transition: 0.4s ease;
  }
`
