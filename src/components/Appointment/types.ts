import { Appointment } from "../../domain/Appointment.domain";

type AppointmentActionType =
  | "confirm-presence"
  | "report-absense"
  | "cancel-appointment"
  | "reschedule-appointment"
  | "schedule-return"
  | "reverse-to-pending";

export type AppointmentOuterProps = {
  appointment: Appointment;
  today: Date;
  onAction: (action: AppointmentActionType) => void;
};

export type AppointmentInnerProps = {
  menuAnchorElement: Element;
  setMenuAnchorElement: (evtTarget: Element) => void;
} & AppointmentOuterProps;
