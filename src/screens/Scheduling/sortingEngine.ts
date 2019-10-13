import { mapPropsStream } from "recompose";
import { SchedulingInnerProps } from "./types";
import { Observable } from "rxjs";
import { Scheduling } from "./dumb";
import { map, filter } from "rxjs/operators";

type TransformerFunction = (
  prop$: Observable<SchedulingInnerProps>
) => Observable<SchedulingInnerProps>;

const transformer: TransformerFunction = (prop$) => {
  return prop$.pipe(
    map(({ appointments, filterMode, sortOrder, ...props }) => {
      const sortedAppointments = appointments.filter(appointment => {
        const today = new Date();
        if(filterMode === 'backwards' && appointment.date < today 
        || filterMode === 'future' && appointment.date >= today){
          return true;
        }else{
          return false;
        }

      }).sort((appointmentA, appointmentB) => {
        if(sortOrder === 'asc'){
          if(appointmentA.date > appointmentB.date){
            return 1;
          }else if(appointmentA < appointmentB){
            return -1;
          }else{
            return 0;
          }
        }else{
          if(appointmentA.date > appointmentB.date){
            return -1;
          }else if(appointmentA < appointmentB){
            return 1;
          }else{
            return 0;
          }
        }
        
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
