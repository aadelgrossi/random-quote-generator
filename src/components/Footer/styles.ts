import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  p {
    margin-top: auto;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.tertiary};
    font-family: 'Montserrat';
    font-size: 0.7em;
  }
`;
