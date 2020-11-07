import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
`;

export const Container = styled.div`
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
