import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  position: sticky;
  margin: 5vw 5vw 0;

  a {
    color: var(--secondary);

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
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
