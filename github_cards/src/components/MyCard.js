import React from 'react'
import styled from 'styled-components'

const Card = props => (
  <Wrapper>
    <img src={props.user.avatar_url} alt={props.user.name} />
    <SplitWrapper>
      <h1>{props.user.name}</h1>
      <h2>{props.user.login}</h2>
      <p>{props.user.location}</p>
      <p>{props.user.company}</p>
      <p>{props.user.blog}</p>
      <p>{props.user.bio}</p>
    </SplitWrapper>
  </Wrapper>
)

export default Card

const SplitWrapper = styled.div`
  width: 45%;
`

const Wrapper = styled.div`
  width: 90%;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: 0 10px 6px -6px #888;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 45%;
  }

  :hover {
    box-shadow: 0 10px 26px -6px crimson;
    transition: 0.4s ease;
  }
`
