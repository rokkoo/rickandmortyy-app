import React from "react";

// Components
import Filter from "../../components/filter";
import Feed from "../../components/Feed";
import Pagination from "../../components/pagination";

// Providers
import { CharactersProvider } from "../../context/CharactersProvider";

// Styles
import { Wrapper } from "./styles";

const Characters = () => {
  return (
    <CharactersProvider>
      <Wrapper>
        <Filter />
        <Pagination />
        <Feed />
      </Wrapper>
    </CharactersProvider>
  );
};

export default Characters;
