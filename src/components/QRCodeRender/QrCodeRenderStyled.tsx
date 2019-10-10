import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

export const BoxStyled = styled.div`
  width: 100%;
  max-width: 500px;
  border: 1px solid blue;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`;

export const ContainerStyled = styled.div`
  width: 100%;
  height: 800px;
  max-width: 480px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  margin: 0 auto;
`;

export const TextStyled = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  text-align: center;
  margin: 10px 10px 10px 10px;
`;

export const ButtonCam = styled(Fab)`
      color: #fff !important;
      background: #747d8c !important;
      width: 60% !important;
      position: relative !important;
`;
