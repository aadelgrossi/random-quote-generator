import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Container = styled.div`
  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.tertiary};
    font-family: 'Montserrat';
    font-size: 0.7em;
  }
`;
