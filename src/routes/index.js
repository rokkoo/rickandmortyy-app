import React from "react";
import { Router } from "@reach/router";

// Pages
import CharacterFeed from "../pages/characters";
import Character from "../pages/character";

// Sytles
import { Wrapper } from "./styles";

const Routes = () => {
  return (
    <div>
      <Router>
        <Wrapper path="/">
          <CharacterFeed path="/" />
          <Character path="character" />
        </Wrapper>
      </Router>
    </div>
  );
};

export default Routes;
