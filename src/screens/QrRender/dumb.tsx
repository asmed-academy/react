import React from "react";
import styled from 'styled-components';

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import {BoxStyled} from './RanderStyled';
import {IconStyled} from './RenderIconStyled';

const CustomBox = styled(Box)`
  border: 1px solid rgba(0,0,0,0.5);
  height: 100vh;
  box-sizing: border-box;
`;

export default function QR_Render() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <CustomBox
          component="div"
          m={1}
        >
          <BoxStyled
            component="div"
            m={1}
            style={{background:'#000'}}

          />

          <BoxStyled
            component="div"
            m={1}
          >
            <IconStyled >

            </IconStyled>
            <p>
              Aponte a câmera <br /> para o QR Code
            </p>
          </BoxStyled>
        </CustomBox>
      </Container>
    </React.Fragment>
  );
}
