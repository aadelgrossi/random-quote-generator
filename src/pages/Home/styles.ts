import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Contents = styled.div`
  margin: 30vh 20vw 0;

  @media (max-width: 720px) {
    margin: 20vh 4rem;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;

  position: sticky;
  margin: 10vh 5vw 0;

  button {
    color: ${({ theme }) => theme.colors.tertiary};

    display: block;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    transition: color 150ms ease-in-out;

    font-size: 18px;
    margin-right: 11px;

    > svg {
      margin-left: 11px;
      vertical-align: middle;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
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
      color: ${({ theme }) => theme.colors.secondary};
    }

    span {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  svg {
    color: transparent;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    span {
      h3 {
        color: ${({ theme }) => theme.colors.primary};
      }
      span {
        color: ${({ theme }) => theme.colors.tertiary};
      }
    }

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
