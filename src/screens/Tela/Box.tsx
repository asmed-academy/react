import React from "react";

import Fab from '@material-ui/core/Fab';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CameraAltIcon from '@material-ui/icons/CameraAlt';



import {
  BoxStyled,
  TextStyled
} from "../../components/QRCodeRender/QrCodeRenderStyled";

import { BoxProps } from "./types";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { fontSize } from "@material-ui/system";





export const Box = ({
  height,
  background,
  children,
}: BoxProps) =>{

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
      color: '#fff',
      background: '#747d8c',
      width: '60%',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
  );
  
  const classes = useStyles({});
     
    return(
  <BoxStyled
    style={{ height: height, background: background }}
  >
    
    {children}
  </BoxStyled>
  )}
  

  


  /**  */