import styled from "styled-components";

export const CardStyled = styled.div`
  background-color: white;
  padding: 2em;
  border-radius: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.device.md} {
    max-width: 45em;
  }
`;
