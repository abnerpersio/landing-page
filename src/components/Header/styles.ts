import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 25px 0px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px 0px;

    li {
      list-style: none;

      & + li {
        margin-left: 20px;
      }
    }
  }
`;
