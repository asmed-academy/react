import { mapPropsStream } from "recompose";
import { SchedulingInnerProps } from "./types";
import { Observable } from "rxjs";
import { Scheduling } from "./dumb";
import { map, filter } from "rxjs/operators";
import { combineLatest } from "rxjs/internal/observable/combineLatest";

type TransformerFunction = (
  prop$: Observable<SchedulingInnerProps>
) => Observable<SchedulingInnerProps>;

const transformer: TransformerFunction = (prop$) => {
  prop$.pipe(
    map(({ appointments, filterMode, sortOrder, ...props }) => {
      const sortedAppointments = appointments.filter(appointment => {
        return true;
      }).sort((appointmentA, appointmentB) => {
        return 1;
      });

      return {
        appointments: sortedAppointments,
        filterMode,
        sortOrder,
        ...props
      } as SchedulingInnerProps;
    })
  )
};

export const SortingEngine = mapPropsStream<
  SchedulingInnerProps,
  SchedulingInnerProps
>(transformer)(Scheduling);
