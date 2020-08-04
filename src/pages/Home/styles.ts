import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 30vh 20vw 0;

  @media (max-width: 720px) {
    margin: 20vh 4rem;
  }
`;

export const Author = styled(Link)`
  margin-top: 4rem;
  margin-left: -2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem;
  width: 100%;
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 1.5rem;
  }

  transition: background 200ms ease-in-out;

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.9em;

    h3 {
      font-weight: bold;
      color: var(--secondary);
    }

    span {
      color: #828282;
    }
  }

  svg {
    color: transparent;
  }

  &:hover {
    background-color: #333333;
    span {
      h3 {
        color: #f2f2f2;
      }
      span {
        color: #828282;
      }
    }

    svg {
      color: #f2f2f2;
    }
  }
`;
