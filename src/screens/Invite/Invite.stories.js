import React from "react";

import { action } from "@storybook/addon-actions";

import { Invite as InviteDumb } from "./dumb";
import InviteEnhanced from "./enhanced";

export default {
  title: "Invite User"
};

export const DefaultDumb = () => (
  <InviteDumb
    onBack={action("onBack")}
    changeEmail={action("changeEmail")}
    changeFullName={action("changeFullName")}
    fullName="Fulano de T"
    email="fulano@detal.co"
    saving={false}
    submitInvite={action("submitInvite")}
  />
);

export const DefaultDumb_Saving = () => (
  <InviteDumb
    onBack={action("onBack")}
    changeEmail={action("changeEmail")}
    changeFullName={action("changeFullName")}
    fullName="Fulano de T"
    email="fulano@detal.co"
    saving={true}
    submitInvite={action("submitInvite")}
  />
);

export const Default_Enhanced = () => (
  <InviteEnhanced
    submitInvite={action("submitInvite")}
    saving={false}
    onBack={action("onBack")}
  />
);
