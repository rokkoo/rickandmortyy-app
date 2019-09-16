import React from "react";
import { navigate } from "@reach/router";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

// Styles
import { Item, Text, Image, Icon } from "./styles";

const List = ({ item }) => {
  const { name, species, gender, image } = item;

  const watchExtendedInformation = () =>
    navigate("/character", { state: { ...item } });

  return (
    <Item onClick={() => watchExtendedInformation()}>
      <Image src={image} />
      <Text>{name}</Text>
      <Text>{species}</Text>
      <Text>{gender}</Text>
      <Icon>
        <FaRegArrowAltCircleRight />
      </Icon>
    </Item>
  );
};

export default List;
