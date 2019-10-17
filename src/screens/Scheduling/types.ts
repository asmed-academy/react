import { Appointment } from "../../domain/Appointment.domain";
import { Observable } from "rxjs";

export type SchedulingRootProps = {
  userName: string;
  onBack: () => void;
};

export type SchedulingOuterProps = {
  appointments: Appointment[];
} & SchedulingRootProps;

export type SortingOrder = "asc" | "desc";

export type ChangeFilter = "future" | "backwards";

export type SchedulingInnerProps = {
  menuAnchorElement: Element | null;
  setMenuAnchorElement: (anchorEl: Element | null) => void;
  sortOrder: SortingOrder;
  changeSortOrder: (sortOrder: SortingOrder) => void;
  filterMode: ChangeFilter;
  changeFilterMode: (filterMode: ChangeFilter) => void;
} & SchedulingOuterProps;

export type EnhancerFunction = (
  prop$: Observable<SchedulingOuterProps>
) => Observable<SchedulingInnerProps>;

export type SmartifierFunction = (
  prop$: Observable<SchedulingRootProps>
) => Observable<SchedulingOuterProps>;
