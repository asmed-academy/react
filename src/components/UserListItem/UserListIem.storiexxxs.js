import React from "react";
import { action } from "@storybook/addon-actions";

import { UserListItem } from "./dumb";
import EnhancedAppointment from "./enhanced";
import { mockAppointments } from "./mocks";

export default {
  title: "UserListItem"
};

export const DefaultDumb = () => (
  <UserListItem
    menuAnchorElement={null}
    setMenuAnchorElement={action("setMenuAnchorElement")}
    user = {
       [ id: 'saasfgdvashjhkg',
        name: 'RebeccaBecca',
        email: 'becca@hotmail.com',
        active: true
    ]
    }
  />
);

export const DefaultEnhanced = () => (
  <EnhancedAppointment
    appointment={mockAppointments[0]}
  />
);
