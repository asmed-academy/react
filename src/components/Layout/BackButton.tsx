import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBack } from '@material-ui/icons';

import { BackButtonProps } from "./types";

export const BackButton = ({ onBack }: BackButtonProps) => {
  return (
    <Tooltip title="Voltar">
      <IconButton color="inherit" onClick={() => onBack()}>
        <ArrowBack />
      </IconButton>
    </Tooltip>
  );
};
