import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import { MenuButtonProps } from "./types";

export const MenuButton = ({ onChangeDrawerState }: MenuButtonProps) => {
  return (
    <Tooltip title="Menu">
      <IconButton color="inherit" onClick={() => onChangeDrawerState(true)}>
        <Icon>menu</Icon>
      </IconButton>
    </Tooltip>
  );
};
