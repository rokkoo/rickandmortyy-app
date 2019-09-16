import React, { useState } from "react";

const CharactersContext = React.createContext([{}, () => {}]);

const CharactersProvider = props => {
  const [state, setState] = useState({ loading: true, currentPage: 1 });
  return (
    <CharactersContext.Provider value={[state, setState]}>
      {props.children}
    </CharactersContext.Provider>
  );
};

export { CharactersContext, CharactersProvider };
