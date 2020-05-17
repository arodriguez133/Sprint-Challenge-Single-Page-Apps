import React from "react";
import styled from 'styled-components';

const CardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2%;
  padding: 1%;
  background-color: lightblue;
`
const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
`

const H1Style = styled.div`
  color: lime;
  font-size: 1.5rem;
  text-shadow: 1px 1px black;
`

export default function CharacterCard(props) {
  console.log(props)
  return (
    <CardStyle>
      <img src = {props.char.image}/>
      <TextStyle>
        <H1Style>
           <h1>{props.char.name}</h1>
        </H1Style>
           <h3>{props.char.status}</h3>
      </TextStyle>
    </CardStyle>

    
  );
}
