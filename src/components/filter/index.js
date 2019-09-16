import React, { useRef, useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_URL } from "../../endpoints";
// Contexts
import { CharactersContext } from "../../context/CharactersProvider";

// Styles
import {
  Wrapper,
  Input,
  Button,
  InputWrapper,
  FilterText,
  Icon,
  Divider,
  FiltersWrapper
} from "./styles";

const Filter = () => {
  const nameRef = useRef();
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isText, setIsText] = useState(true);
  const [state, setState] = useContext(CharactersContext);

  const handleFilter = async () => {
    // Replace all spaces ' ' '   ' for a '%20'
    const name = nameRef.current.value.trim().replace(/\s+/g, "%20");
    const url =
      selectedStatus !== "all"
        ? `${API_URL}?name=${name}&status=${selectedStatus}`
        : `${API_URL}?name=${name}`;
    const res = await fetch(url);
    const data = await res.json();
    setState({ ...data, currentPage: 1 });
  };

  const RenderFilter = ({ name }) => {
    const lowerName = name.toString().toLowerCase();
    return (
      <FilterText
        selected={selectedStatus === lowerName}
        onClick={() => handleFilterByStatus(lowerName)}
      >
        {name}
      </FilterText>
    );
  };

  const handleFilterByStatus = async name => {
    setSelectedStatus(name);
    const url = name !== "all" ? `${API_URL}?status=${name}` : `${API_URL}`;
    const res = await fetch(url);
    const data = await res.json();
    setState({ ...data, currentPage: 1 });
  };

  const isName = e =>
    setIsText(e.target.value.trim().replace(/\s+/g, "").length === 0);

  const enterSearch = e => {
    if (e.key === "Enter") handleFilter();
  };

  return (
    <Wrapper>
      <FiltersWrapper>
        <RenderFilter name="All" />
        <Divider />
        <RenderFilter name="Alive" />
        <Divider />
        <RenderFilter name="Dead" />
        <Divider />
        <RenderFilter name="Unknown" />
        <Divider />
      </FiltersWrapper>
      <InputWrapper>
        <Icon>
          <FaSearch />
        </Icon>
        <Input
          error={state.error}
          ref={nameRef}
          haveText={isText}
          onChange={isName}
          onKeyPress={enterSearch}
        />
      </InputWrapper>
      <Button onClick={() => handleFilter()}>Filter</Button>
    </Wrapper>
  );
};

export default Filter;
