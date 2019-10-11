import { Appointment } from "../../domain/Appointment.domain";

export type SchedulingOuterProps = {
  userName: string;
  appointments: Appointment[];
  onBack: () => void;
};

export type SortingOrder = "asc" | "desc";

export type SchedulingInnerProps = {
  menuAnchorElement: Element | null;
  setMenuAnchorElement: (anchorEl: Element | null) => void;
  sortOrder: SortingOrder;
  changeSortOrder: (sortOrder: SortingOrder) => void;
  filterMode: "future" | "backwards";
  changeFilterMode: (
    filterMode: "future" | "backwards"
  ) => void;
} & SchedulingOuterProps;

