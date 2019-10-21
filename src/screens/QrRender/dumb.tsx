import React, { useState } from "react";
import {
  ContainerStyled,
  TextStyled
} from "../../components/QRCodeRender/QrCodeRenderStyled";
import windowSize from "react-window-size";
import { Box } from "./Box";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";

const Tela = props => {
  const [active, setActive] = useState(null);

  const activeCam = actived => {
    setActive(actived);

    console.log(active);
  };
  return (
    <ContainerStyled>
      {active ? (
        <Box height="100%" background="#000">
          <FontAwesomeIcon
            icon={faQrcode}
            style={{ color: "#fff", fontSize: 60 }}
          />
          <TextStyled
            style={{ color: "#a4b0be", padding: "0 80px" }}
          >
            Ative a camera para ler o QR Code
          </TextStyled>
        
        </Box>
      ) : (
        <Box height="100%" background="#000">
          <FontAwesomeIcon
            icon={faQrcode}
            style={{ color: "#fff", fontSize: 60 }}
          />
          <TextStyled
            style={{ color: "#a4b0be", padding: "0 80px" }}
          >
            Aponte a camera
          </TextStyled>

          <Button
            name="Button"
            onClick={() => activeCam(true)}
          />
        </Box>
      )}
    </ContainerStyled>
  );
};

export default windowSize(Tela);
