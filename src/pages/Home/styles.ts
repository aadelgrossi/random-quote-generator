import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: max(10rem, 10vw) 20vw 0;
`;

export const Author = styled(Link)`
  margin-top: max(7vh, 40px);
  margin-left: -2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 4vw 4vw;
  width: 100%;
  cursor: pointer;

  transition: background 200ms ease-in-out;

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      font-weight: bold;
      color: var(--secondary);
      font-size: max(16px, 1.5vw);
    }

    span {
      font-size: max(14px, 1vw);
      color: #828282;
    }
  }

  svg {
    color: transparent;
  }

  &:hover {
    background-color: #333333;
    span {
      h3 {
        color: #f2f2f2;
      }
      span {
        color: #828282;
      }
    }

    svg {
      color: #f2f2f2;
    }
  }
`;
