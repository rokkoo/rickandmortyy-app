import React, { useContext, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Contexts
import { CharactersContext } from "../../context/CharactersProvider";

// Styles
import { Wrapper, Button, Text, InfoWrapper } from "./styles";

const Filter = () => {
  const [state, setState] = useContext(CharactersContext);

  // only seve current response of API and
  // delete previous load data
  const changePage = async (page, option) => {
    const res = await fetch(page);
    const data = await res.json();
    setState({
      ...data,
      currentPage:
        option === "next" ? state.currentPage + 1 : state.currentPage - 1
    });
  };

  return state.loading ? (
    <></>
  ) : (
    "info" in state && (
      <Wrapper>
        {state.info.prev && (
          <Button onClick={() => changePage(state.info.prev, "prev")}>
            <FaArrowLeft />
          </Button>
        )}
        <InfoWrapper>
          <Text>Total: {state.info.count}</Text>
          <Text>-</Text>
          <Text>
            Pages: {state.currentPage}/{state.info.pages}
          </Text>
        </InfoWrapper>
        {state.info.next && (
          <Button onClick={() => changePage(state.info.next, "next")}>
            <FaArrowRight />
          </Button>
        )}
      </Wrapper>
    )
  );
};

export default Filter;
