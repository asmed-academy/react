import React from "react";
import {ContainerStyled, BoxStyled, TextStyled }  from '../../components/QRCodeRender/QrCodeRenderStyled';
import {Box} from './types';
import TouchAppIcon from "@material-ui/icons/TouchApp";


export const BoxProp = ({
  height,
  background:background,
  text,
}:Box)=>
    (
    <BoxStyled style={{height:height, background:background}}>
  
     <TouchAppIcon fontSize="large" ></TouchAppIcon>
      <TextStyled>{text}</TextStyled>
    </BoxStyled>
    )
    
