import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 20vh;
`;
export const Quote = styled.div`
  font-size: max(24px, calc(2vw));
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 8px;
    height: 100%;
    background-color: var(--accent);
    top: 0;
    left: -100px;
  }
`;

export const Author = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: row;
  padding: 50px 30px;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-weight: bold;
      color: var(--secondary);
    }

    span {
      font-size: 14px;
      color: #828282;
    }
  }

  a {
    color: #f2f2f2;
    margin-left: auto;
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
