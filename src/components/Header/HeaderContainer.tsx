import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #e7d74a;
  width: 100%;
  height: 60px;
  padding: 0 16px 0 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  z-index: 10; 

  border-width: 0 1px 5px 0;  
  border-style: solid;
  border-color: #f00;
  box-sizing: border-box;
`;