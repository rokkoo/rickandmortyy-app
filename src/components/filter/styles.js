import styled from "styled-components";
import { device, colors } from "../../theme";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  padding: 30px;
  justify-items: center;

  @media ${device.tablet} {
    display: flex;
    justify-content: flex-end;
  }
`;

export const InputWrapper = styled.div`
  margin: 0 15px 0 15px;
  display: flex;
  align-items: center;
  background-color: #00000024;
  border-radius: 6px;
  padding: 10px;
`;

export const Icon = styled.div`
  display: flex;
  height: 100%;
  color: #00000024;
  padding-left: 5px;
  align-items: center;
`;

export const Input = styled.input`
  color: ${props => (props.error ? "#fa5252" : "#495057")};
  font-weight: 600;
  margin-left: 5px;
  border: none;
  background-color: transparent;
  border-radius: 6px;
  opacity: 0.6;

  @media ${device.tablet} {
    width: ${props => (props.haveText ? "25px" : "180px")};
    transition: ${props => (props.haveText ? "width 0.8s" : "none")};

    :focus {
      width: ${props => (props.haveText ? "180px" : "none")};
    }
  }
`;

export const Button = styled.button`
  background-color: #97ce4c;
  background-image: linear-gradient(0deg, #97ce4c 0%, #2af598 100%);
  border: none;
  border-radius: 6px;
  padding: 5px;
  width: 50px;
  font-family: "Shadows Into Light", cursive, Quicksand, sans-serif;
  font-weight: 500;
  cursor: pointer;
`;

export const FiltersWrapper = styled.div`
  display: flex;
`;

export const FilterText = styled.div`
  color: ${props => (props.selected ? "#97ce4c" : "#354a53")};
  padding: 0 15px 0 15px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Divider = styled.div`
  width: 2px;
  height: 15px;
  background-color: ${colors.gray};
  align-self: center;
`;
