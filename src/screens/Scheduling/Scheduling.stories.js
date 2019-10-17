import React from "react";

import { action } from "@storybook/addon-actions";

import { Scheduling as SchedulingDumb } from "./dumb";
import SchedulingEnhanced from "./enhanced";
import SchedulingSmart from "./smart";

import { mockAppointments } from "./mocks";

export default {
  title: "Scheduling"
};

export const SortAscFilterFuture = () => (
  <SchedulingDumb
    userName="Fulano de Tal"
    appointments={mockAppointments}
    onConfirmAppointment={action("onConfirmAppointment")}
    onCancelAppointment={action("onCancelAppointment")}
    menuAnchorElement={null}
    setMenuAnchorElement={action("setMenuAnchorElement")}
    onBack={action("onBack")}
    sortOrder="asc"
    filterMode="future"
  />
);

export const SortDescFilterFuture = () => (
  <SchedulingDumb
    userName="Fulano de Tal"
    appointments={mockAppointments}
    onConfirmAppointment={action("onConfirmAppointment")}
    onCancelAppointment={action("onCancelAppointment")}
    menuAnchorElement={null}
    setMenuAnchorElement={action("setMenuAnchorElement")}
    onBack={action("onBack")}
    sortOrder="desc"
    filterMode="future"
  />
);

export const SortAscFilterBackwards = () => (
  <SchedulingDumb
    userName="Fulano de Tal"
    appointments={mockAppointments}
    onConfirmAppointment={action("onConfirmAppointment")}
    onCancelAppointment={action("onCancelAppointment")}
    menuAnchorElement={null}
    setMenuAnchorElement={action("setMenuAnchorElement")}
    onBack={action("onBack")}
    sortOrder="asc"
    filterMode="backwards"
  />
);

export const SortDescFilterBackwards = () => (
  <SchedulingDumb
    userName="Fulano de Tal"
    appointments={mockAppointments}
    onConfirmAppointment={action("onConfirmAppointment")}
    onCancelAppointment={action("onCancelAppointment")}
    menuAnchorElement={null}
    setMenuAnchorElement={action("setMenuAnchorElement")}
    onBack={action("onBack")}
    sortOrder="desc"
    filterMode="backwards"
  />
);

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
    onBack={action("onBack")}
  />
);

export const Smart = () => (
  <SchedulingSmart
    userName="Fulano de Tal"
    onBack={action("onBack")}
  />
);
