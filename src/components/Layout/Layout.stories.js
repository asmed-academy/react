import React from "react";
import { action } from "@storybook/addon-actions";

import { Layout as DumbLayout } from "./dumb";
import EnhancedLayout from "./enhanced";
import { FakeContent } from "./mocks";
import { GenericMenuButton } from "./GenericMenuButton";
import { Settings } from "@material-ui/icons";

export default {
  title: "Layout"
};

const smartLayoutProps = {
  onLogout: action("onLogout"),
  title: "Teste do Título",
  children: <FakeContent />
};

const dumbLayoutProps = {
  drawerState: false,
  onChangeDrawerState: action("onChangeDrawerState"),
  ...smartLayoutProps
};

const subtitleProps = {
  subtitle: "Teste de Subtítulo"
};

const rightButtonProps = {
  renderRight: () => (
    <GenericMenuButton
      tooltip="Filtrar e Ordenar"
      onClick={action("onRightButtonClicked")}
      Icon={Settings}
    />
  )
};

const userProps = {
  user: {
    id: "xpto01",
    name: "Fulano de Tal",
    email: "fulano.tal@clinicaparceira.com.br"
  }
};

const onBackProps = {
  onBack: action("onBack")
};

export const Default = () => (
  <DumbLayout {...dumbLayoutProps} />
);

export const WithRightButton = () => (
  <DumbLayout {...dumbLayoutProps} {...rightButtonProps} />
);

export const WithSubtitle = () => (
  <DumbLayout {...dumbLayoutProps} {...subtitleProps} />
);

export const WithBackButton = () => (
  <DumbLayout {...dumbLayoutProps} {...onBackProps} />
);

export const WithSubtitleAndRightButton = () => (
  <DumbLayout
    {...dumbLayoutProps}
    {...subtitleProps}
    {...rightButtonProps}
  />
);

export const WithBackButtonAndRightButton = () => (
  <DumbLayout
    {...dumbLayoutProps}
    {...onBackProps}
    {...rightButtonProps}
  />
);

export const DrawerOpen = () => (
  <DumbLayout {...dumbLayoutProps} drawerState={true}>
    <FakeContent />
  </DumbLayout>
);

export const DrawerOpenWithUser = () => (
  <DumbLayout
    {...dumbLayoutProps}
    {...userProps}
    drawerState={true}
  >
    <FakeContent />
  </DumbLayout>
);

export const Enhanced = () => (
  <EnhancedLayout {...smartLayoutProps} />
);

export const EnhancedWithRightButtonAndSubtitleAndUser = () => (
  <EnhancedLayout
    {...smartLayoutProps}
    {...rightButtonProps}
    {...subtitleProps}
    {...userProps}
  />
);
