import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MyAccountIcon from "@material-ui/icons/AccountBox";
import { Close } from "@material-ui/icons";

import theme from "../../theme";

import { SidebarProps } from "./types";

export const Sidebar = ({
  onLogout,
  onClose,
  user
}: SidebarProps) => {
  return (
    <React.Fragment>
      <IconButton
        onClick={onClose}
        style={{
          position: "fixed",
          top: "8px",
          left: "8px",
          zIndex: 2
        }}
      >
        <Close />
      </IconButton>
      <List
        style={{
          maxWidth: "350px",
          minWidth: "300px",
          width: "80%"
        }}
      >
        <ListItem style={{ marginTop: "72px" }}>
          <img
            src="/logo-asmed.png"
            style={{
              height: "100px",
              width: "auto",
              margin: "0 auto",
              display: "block"
            }}
          />
        </ListItem>
        {!!user && (
          <ListItem
            style={{
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography
              component="p"
              style={{
                color: theme.disabled,
                fontWeight: 300,
                fontSize: theme.fontSize - 2
              }}
            >
              Conectado como
            </Typography>
            <Typography
              component="p"
              style={{
                color: theme.brandDark2,
                margin: "8px 0 16px 0"
              }}
            >
              {user.name || user.email}
            </Typography>
            <Button
              onClick={onLogout}
              style={{
                color: theme.danger,
                marginTop: "16px"
              }}
            >
              Sair
            </Button>
          </ListItem>
        )}
      </List>
    </React.Fragment>
  );
};
