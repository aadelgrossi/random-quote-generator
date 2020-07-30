import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: clamp(16px, 2vw, 26px);
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 8px;
    height: 100%;
    background-color: var(--accent);
    top: 0;
    left: max(-100px, -20%);
  }
`;
