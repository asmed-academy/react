import React, { MouseEvent } from "react";

export type LayoutOuterProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string | null;
  renderRight?: (() => React.ReactNode) | null;
  onBack?: (() => void) | null;
  onLogout?: (() => void) | null;
  user?: SidebarUser | null;
};

export type LayoutInnerProps = {
  drawerState: boolean;
  onChangeDrawerState: (newState: boolean) => void;
} & LayoutOuterProps;

export type SidebarUser = {
  id: string;
  name?: string;
  email: string;
};

export type SidebarProps = {
  onLogout: () => void;
  onClose: () => void;
  user?: SidebarUser | null;
};
