import { Appointment } from "../../domain/Appointment.domain";

export type SchedulingOuterProps = {
  userName: string;
  appointments: Appointment[];
  onConfirmAppointment: (appointmentId: string) => void;
  onCancelAppointment: (appointmentId: string) => void;
  onBack: () => void;
};

export type SchedulingInnerProps = {
  menuAnchorEl: Element | null;
  setMenuAnchorElement: (anchorEl: Element | null) => void;
} & SchedulingOuterProps;
