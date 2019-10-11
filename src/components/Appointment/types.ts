import { Appointment } from "../../domain/Appointment.domain";

export type AppointmentOuterProps = {
  appointment: Appointment;
};

export type AppointmentInnerProps = {
  menuAnchorElement: Element;
  setMenuAnchorElement: (evtTarget: Element) => void;
  children: React.ReactNode;
} & AppointmentOuterProps;
