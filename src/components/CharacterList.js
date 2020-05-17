import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [listCharacters, setListCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setListCharacters(response.data.results);

    });
  }, []);

console.log(listCharacters);

  return (
    <section className="character-list">
      <h2>{listCharacters.map(char => {
          return (
          <CharacterCard
          key = {char.id}
          char = {char}
          />
        )})}</h2>
    </section>
  );
}
