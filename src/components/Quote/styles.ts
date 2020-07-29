import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
`;

export const Content = styled.div`
  font-size: max(20px, calc(2vw));
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

export const Author = styled.div`
  margin-top: max(7vh, 40px);
  margin-left: -2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 4vw 4vw;
  width: 100%;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
      font-weight: bold;
      color: var(--secondary);
      font-size: max(16px, 1.5vw);
    }

    span {
      font-size: max(14px, 1vw);
      color: #828282;
    }
  }

  a {
    color: #f2f2f2;
    margin-left: auto;
    justify-content: center;
  }

  transition: background 200ms ease-in-out;

  &:hover {
    background-color: #333333;
    p {
      color: #f2f2f2;
    }
    span {
      color: #828282;
    }
  }
`;
