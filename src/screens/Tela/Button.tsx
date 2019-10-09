import React, {useState} from "react";

import {ButtonCam} from '../../components/QRCodeRender/QrCodeRenderStyled'

import CameraAltIcon from "@material-ui/icons/CameraAlt";

import { ButtonProps } from "./types";

export const Button = ({ onClick, name }: ButtonProps) => {
  return (
    <ButtonCam
      variant="extended"
      aria-label="delete"
      onClick={onClick}
    >
      <CameraAltIcon style={{padding: "0 10px", position: "absolute", top: 12,  left: 15, }}/>
      Ativar Camera
    </ButtonCam>
  );
};
