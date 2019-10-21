import React from "react";
import { action } from "@storybook/addon-actions";

import { Layout as DumbLayout } from "../components/Layout/dumb";
import { FakeContent } from "../components/Layout/mocks";

export default {
  title: "Layout"
};

const height = window.innerHeight;

export const DumbLayoutWithEmptyContent = () => (
  <DumbLayout
    height={height}
    drawerState={false}
    onChangeDrawerState={action("changeDrawerState")}
    onLogOut={action('onLogout')}
    title="Rede Conveniada"
    subtitle="Gestão dos estabelecimentos parceiros"
    openChangePassword={action('openChangePassword')}
  >
    <FakeContent />
  </DumbLayout>
);
