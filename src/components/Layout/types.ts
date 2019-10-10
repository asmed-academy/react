import React from 'react';

import { MenuButton } from './MenuButton';

export type DumbProps = {
    children: React.ReactNode,
    drawerState: boolean,
    onChangeDrawerState: (newState: boolean) => void,
    height?: number,
    title: string,
    subtitle?: string,
    holderStyle?: React.CSSProperties
    onLogOut: () => void,
    openChangePassword: () => void,
    renderRight?: () => React.ReactNode,
    onBack?: () => void
  }

  export type SidebarProps = {
    onLogOut: () => void,
    onClose: () => void,
    openChangePassword: () => void,
    user?: {
        id: string,
        name?: string,
        email: string
      }
  }

  export type MenuButtonProps = {
    onChangeDrawerState: (newState: boolean) => void
  }

  export type BackButtonProps = {
    onBack: () => void
  }

  export type GearButtonProps = {
    onClick: () => void
  }