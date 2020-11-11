import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
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
    color: ${props => props.theme.colors.tertiary};

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
      color: ${props => props.theme.colors.hover};
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
      color: ${props => props.theme.colors.secondary};
    }

    span {
      color: ${props => props.theme.colors.tertiary};
    }
  }

  svg {
    color: transparent;
  }

  &:hover {
    background-color: ${props => props.theme.colors.hover};
    span {
      h3 {
        color: ${props => props.theme.colors.primary};
      }
      span {
        color: ${props => props.theme.colors.tertiary};
      }
    }

    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
