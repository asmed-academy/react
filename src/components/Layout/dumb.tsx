import React from "react";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { LayoutInnerProps } from "./types";

import { GenericMenuButton } from "./GenericMenuButton";
import { Sidebar } from "./Sidebar";
import { Menu, ArrowBack } from "@material-ui/icons";
import { TitleHolder } from "./TitleHolder";

export const Layout = ({
  children,
  drawerState,
  onChangeDrawerState,
  title,
  subtitle,
  onBack,
  onLogout,
  renderRight,
  user
}: LayoutInnerProps) => (
  <div>
    <AppBar>
      <Toolbar disableGutters={true}>
        {!onBack && (
          <GenericMenuButton
            Icon={Menu}
            tooltip="Menu"
            onClick={() => onChangeDrawerState(true)}
          />
        )}
        {!!onBack && (
          <GenericMenuButton
            tooltip="Voltar"
            Icon={ArrowBack}
            onClick={onBack}
          />
        )}
        <TitleHolder>
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
        </TitleHolder>
        {!!renderRight && renderRight()}
      </Toolbar>
    </AppBar>
    <Drawer
      anchor="left"
      open={drawerState}
      onClose={() => onChangeDrawerState(false)}
    >
      <Sidebar
        onClose={() => onChangeDrawerState(false)}
        onLogout={() => onLogout()}
        user={user}
      />
    </Drawer>
    <div
      style={{
        paddingTop: "63px"
      }}
    >
      {children}
    </div>
  </div>
);
