import React from 'react';
import {ContainerStyled, TextStyled }  from '../../components/QRCodeRender/QrCodeRenderStyled';
import windowSize from 'react-window-size';
import {BoxProp} from './Box';

 const Tela = (props)=>{

    //const altura =`${props.windowHeight}px`;
    const text = "Por favor click no QR Code para abrir a camera";

        return(
            <ContainerStyled>
                
                <BoxProp height="40%" background="#000"></BoxProp>

                <BoxProp height="60%" text ={text}></BoxProp>

            </ContainerStyled>
        ) 
    }

export default windowSize(Tela);