import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { Settings } from '@material-ui/icons';

import { GearButtonProps } from "./types";

export const GearButton = ({ onClick }: GearButtonProps) => {
  return (
    <Tooltip title="Opções">
      <IconButton color="inherit" onClick={() => onClick(true)}>
        <Settings />
      </IconButton>
    </Tooltip>
  );
};
