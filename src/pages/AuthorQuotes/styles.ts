import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.div`
  margin: 5vh 15vw 10vh;
  @media (max-width: 720px) {
    margin: 5vh 4rem 10vh;
  }
`;

export const Quotes = styled.div`
  margin-top: 5rem;

  div + div {
    margin-top: 4rem;
  }
`;

export const BackButton = styled.button`
  color: inherit;
  transition: color 150ms ease-in-out;

  > svg {
    margin-right: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Title = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const LoadingContainer = styled.div`
  margin-top: 20vh;
`;
