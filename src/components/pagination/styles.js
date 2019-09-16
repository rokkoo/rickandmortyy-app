import styled from "styled-components";
import { colors } from "../../theme";

export const Wrapper = styled.section`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  cursor: pointer;
  color: ${colors.primary};
  border-radius: 7px;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: #97ce4c;
  background-image: linear-gradient(0deg, #97ce4c 0%, #2af598 100%);
`;

export const Text = styled.p`
  color: #495057;
  font-weight: 400;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 10px 0 10px;
  justify-content: space-between;
`;
