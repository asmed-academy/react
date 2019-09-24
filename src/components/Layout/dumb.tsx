import React from "react";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { DumbProps } from "./types";

import { MenuButton } from "./MenuButton";
import { Sidebar } from "./Sidebar";

export const Layout = ({
  children,
  height,
  drawerState,
  onChangeDrawerState,
  title,
  subtitle,
  holderStyle = {},
  onLogOut,
  openChangePassword
}: DumbProps) => {
  return (
    <div>
      <AppBar>
        <Toolbar
          disableGutters={true}
          style={{
            margin: "0 8px 0 8px"
          }}
        >
          <MenuButton
            onChangeDrawerState={onChangeDrawerState}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "flex-start",
              justifyContent: "flex-start",
              flexGrow: 1,
              margin: "0 8px"
            }}
          >
            <Typography variant="h5" color="inherit" noWrap>
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="body1"
                color="inherit"
                noWrap
              >
                {subtitle}
              </Typography>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={() => onChangeDrawerState(false)}
      >
        <Sidebar
          onClose={() => onChangeDrawerState(false)}
          onLogOut={onLogOut}
          openChangePassword={openChangePassword}
        />
      </Drawer>
      <div
        style={{
          height: `${height - 64}px`,
          overflowX: "hidden",
          overflowY: "auto",
          position: "fixed",
          overflowClipBox: "content-box",
          top: "64px",
          width: "100%",
          ...holderStyle
        }}
      >
        {children}
      </div>
    </div>
  );
};
