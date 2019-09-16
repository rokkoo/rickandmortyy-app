import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { FaArrowLeft } from 'react-icons/fa';

// Hooks
import useQueryName from '../../hooks/useQueryName';

// Styles
import {
  Wrapper,
  Details,
  Detail,
  Image,
  Text,
  Episodes,
  DetailsText,
  ImageContainer,
  Episode,
  Button,
  Nav
} from './styles';

const Character = props => {
  const {
    name,
    status,
    image,
    loaded,
    gender,
    location,
    type,
    species,
    origin,
    episode
  } = useQueryName(props.location);

  useEffect(() => {
    if (name === '' && status === '' && loaded) navigate('/');
  }, [name, status, loaded]);

  const goHome = () => navigate('/');

  return (
    <Wrapper>
      <Nav>
        <Button onClick={() => goHome()}>
          <FaArrowLeft />
          <Text>Go back</Text>
        </Button>
      </Nav>
      <Details>
        <ImageContainer>
          <Image src={image} />
          <Detail>
            <Text primary>Character name</Text>
            <Text>{name}</Text>
          </Detail>
        </ImageContainer>
        <DetailsText>
          <Detail>
            <Text primary>Gender</Text>
            <Text>{gender}</Text>
          </Detail>
          <Detail>
            <Text primary>Location</Text>
            <Text>{location && location.name}</Text>
          </Detail>
          <Detail>
            <Text primary>Origin</Text>
            <Text>{origin && origin.name}</Text>
          </Detail>
          <Detail>
            <Text primary>Species</Text>
            <Text>{species}</Text>
          </Detail>
          <Detail>
            <Text primary>Status</Text>
            <Text>{status}</Text>
          </Detail>
          <Detail>
            <Text primary>Type</Text>
            <Text>{type}</Text>
          </Detail>
        </DetailsText>
      </Details>
      <Episodes>
        <Text primary>
          Episodes - total episodes {episode && episode.length}
        </Text>
        {episode &&
          episode.map((episode, key) => <Episode key={key}>{episode}</Episode>)}
      </Episodes>
    </Wrapper>
  );
};

export default Character;
