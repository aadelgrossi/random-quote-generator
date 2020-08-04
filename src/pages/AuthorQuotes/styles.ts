import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Quotes = styled.div`
  margin: 10vh 15vw 10vh;

  div + div {
    margin-top: 4rem;
  }

  @media (max-width: 720px) {
    margin: 5vh 4rem 10vh;
  }
`;

export const BackButton = styled.button`
  color: inherit;
  transition: color 150ms ease-in-out;

  > svg {
    margin-right: 2rem;
  }

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }
`;

export const Header = styled.div`
  margin-left: 8vw;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;

  align-items: center;
`;
