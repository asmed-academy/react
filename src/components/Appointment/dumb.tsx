import React from "react";

import { AppointmentInnerProps } from "./types";
import {
  Card,
  CardHeader,
  IconButton,
  Menu
  // MenuItem,
  // ListItemIcon,
  // ListItemText
} from "@material-ui/core";
import { MoreVert, Done } from "@material-ui/icons";
import { IconMenuItem } from "../IconMenuItem";

export const Appointment = ({
  appointment,
  menuAnchorElement,
  onAction,
  setMenuAnchorElement,
  today
}: AppointmentInnerProps) => (
  <Card>
    <CardHeader
      title={appointment.service.name}
      action={
        <IconButton
          onClick={evt =>
            setMenuAnchorElement(evt.target as Element)
          }
        >
          <MoreVert />
        </IconButton>
      }
    />
    <Menu
      anchorEl={menuAnchorElement}
      open={!!menuAnchorElement}
      onClose={() => setMenuAnchorElement(null)}
    >
      <IconMenuItem
        Icon={Done}
        text="Confirmar Presença"
        onClick={() => {}}
      />
    </Menu>
  </Card>
);
