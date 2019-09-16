import styled from "styled-components";
import { device, colors } from "../../theme";

export const Item = styled.div`
  display: grid;
  grid-row-gap: 10px;
  border-radius: 7px;
  grid-template-columns: 0.4fr minmax(100px, 0.9fr) 1fr 1fr 1fr;
  align-items: center;
  margin: 7px;
  justify-content: flex-end;

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;

    svg {
      font-weight: 300;
      color: ${colors.green};
    }
  }

  @media ${device.tablet} {
    grid-column-gap: 15px;
    padding: 10px;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 6px;
`;

export const Text = styled.p`
  color: #2c3e50;
  font-weight: 600;
  justify-self: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 70px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Icon = styled.div`
  align-self: center;
  justify-self: center;
  font-size: 20px;
  padding: 10px;
`;
