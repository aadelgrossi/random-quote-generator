import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 3rem;
  border-left: 8px solid #f7df94;

  @media (min-width: 900px) {
    width: 80%;
  }
`;
