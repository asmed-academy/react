import React from "react";
import {
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { SvgIconComponent } from "@material-ui/icons";

type IconMenuItemProps = {
  Icon: SvgIconComponent;
  text: string;
  onClick: () => void;
};

export const IconMenuItem = ({
  Icon,
  text,
  onClick
}: IconMenuItemProps) => (
  <MenuItem onClick={onClick}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText>{text}</ListItemText>
  </MenuItem>
);
