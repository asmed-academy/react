import React from "react";

import { action } from "@storybook/addon-actions";

import { Scheduling as SchedulingDumb } from "./dumb";
import SchedulingEnhanced from "./enhanced";

import { mockAppointments } from "../../components/Appointment/mocks";

export default {
  title: "Scheduling"
};

export const Dumb = () => (
  <SchedulingDumb
    userName="Fulano de Tal"
    appointments={mockAppointments}
    onConfirmAppointment={action("onConfirmAppointment")}
    onCancelAppointment={action("onCancelAppointment")}
    menuAnchorElement={null}
    setMenuAnchorElement={action("setMenuAnchorElement")}
    onBack={action("onBack")}
  />
);

export const Enhanced = () => (
  <SchedulingEnhanced
    userName="Fulano de Tal"
    appointments={mockAppointments}
    onConfirmAppointment={action("onConfirmAppointment")}
    onCancelAppointment={action("onCancelAppointment")}
    onBack={action("onBack")}
  />
);
