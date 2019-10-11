import React from "react";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { SvgIconComponent } from "@material-ui/icons";

type MenuButtonProps = {
  tooltip?: string;
  onClick: (
    event: React.MouseEvent<
      Element,
      React.MouseEvent
    >
  ) => void;
  Icon: SvgIconComponent;
};

export const GenericMenuButton = ({
  tooltip,
  onClick,
  Icon
}: MenuButtonProps) => (
  <Tooltip title={tooltip}>
    <IconButton color="inherit" onClick={onClick}>
      <Icon />
    </IconButton>
  </Tooltip>
);
