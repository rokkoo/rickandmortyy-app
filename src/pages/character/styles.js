import styled from "styled-components";
import { device } from "../../theme";

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 0.2fr 0.2fr;
  background-color: #82828217;
  min-height: 100vh;
  letter-spacing: 0px;
`;

export const Details = styled.div`
  display: grid;
  margin: 20px 10px 0px 10px;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.1);

  @media ${device.tablet} {
    grid-template-columns: 0.3fr 1fr;
    grid-row-gap: 0px;
    margin: 20px 40px 0px 40px;
  }
`;

export const DetailsText = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 15px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ImageContainer = styled.section`
  display: grid;
  grid-row-gap: 15px;
  padding-left: 20px;
  justify-content: center;

  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

export const Detail = styled.div``;

export const Text = styled.p`
  color: ${props => (props.primary ? "#666" : "black")};
  font-size: ${props => (props.primary ? "22px" : "none")};
  opacity: ${props => (props.primary ? "0.5" : "1")};
  text-align: center;

  @media ${device.tablet} {
    text-align: start;
  }
`;

export const Episodes = styled.section`
  display: grid;
  padding: 15px;
  margin: 20px 10px 0px 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.1);

  p {
    padding: 10px;
  }

  @media ${device.tablet} {
    margin: 20px 40px 0px 40px;
  }
`;

export const Episode = styled.p`
  justify-self: center;
  font-size: 1.2rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding-top: 20px;

  @media ${device.tablet} {
    margin-left: 45px;
  }
`;

export const Button = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  background-color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  box-shadow: 0px 4px 7px 2px rgba(100, 240, 49, 0.45),
    0 6px 20px 0 rgba(0, 0, 0, 0.1);
`;
