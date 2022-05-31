import styled from "styled-components";

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media ${(props) => props.theme.device.md} {
    gap: 2.3rem;
  }
`;
