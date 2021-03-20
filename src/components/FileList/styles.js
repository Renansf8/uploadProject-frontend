import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    border-bottom: 1px solid #D3D3D3;
    padding-bottom: 5px;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  span {
    font-size: 12px;
    color: #999;
    margin-top: 5px;
    display: flex;
    justify-content: center;
  }

  button {
    border: 0;
    background: transparent;
    color: #A52A2A;
    margin-left: 5px;
    cursor: pointer
  }
`;

export const Preview = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
