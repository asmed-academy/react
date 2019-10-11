import React from "react";
import { action } from "@storybook/addon-actions";

import { Appointment as DumbAppointment } from "./dumb";
import EnhancedAppointment from "./enhanced";
import { mockAppointments } from "./mocks";

export default {
  title: "Appointment"
};

export const DefaultDumb = () => (
  <DumbAppointment
    appointment={mockAppointments[0]}
    menuAnchorElement={null}
    setMenuAnchorElement={action("setMenuAnchorElement")}
  />
);

export const DefaultEnhanced = () => (
  <EnhancedAppointment
    appointment={mockAppointments[0]}
  />
);
