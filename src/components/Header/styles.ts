import styled from 'styled-components';

export const Container = styled.div`
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
