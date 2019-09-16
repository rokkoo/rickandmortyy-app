import React, { useContext, useEffect } from "react";

// Contexts
import { CharactersContext } from "../../context/CharactersProvider";

// Components
import Item from "../item";

// Styles
import { Items, Text, Noresults } from "./styles";

// Assets
import Morty from "../../assets/morty";

// Endpoints
import { API_URL } from "../../endpoints";

const Feed = () => {
  const [state, setState] = useContext(CharactersContext);

  useEffect(() => {
    if (state.loading) {
      const getCharacters = async () => {
        const res = await fetch(API_URL);
        const data = await res.json();
        setState({ ...state, ...data, loading: false });
      };
      getCharacters();
    }
  }, [setState, state]);

  return state.loading ? (
    <Text>Loading</Text>
  ) : state.error ? (
    <Noresults>
      <Morty />
      <Text>{state.error} :(</Text>
    </Noresults>
  ) : (
    <Items>
      {state.results.map((item, i) => {
        return <Item item={item} key={i} />;
      })}
    </Items>
  );
};

export default Feed;
