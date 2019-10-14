import { mapPropsStream } from "recompose";
import { SchedulingInnerProps } from "./types";
import { Observable, from } from "rxjs";
import { Scheduling } from "./dumb";
import { map, filter } from "rxjs/operators";
import moment from 'moment';

type TransformerFunction = (
  prop$: Observable<SchedulingInnerProps>
) => Observable<SchedulingInnerProps>;

const transformer: TransformerFunction = (prop$) => {
  return from(prop$).pipe(
    map(({ appointments, filterMode, sortOrder, ...props }) => {
      const sortedAppointments = appointments.filter(appointment => {
        const today = moment().format('YYYY-MM-DD, h:mm');
        const appointmentDate = moment(appointment.date).format("YYYY-MM-DD, h:mm");
        
        if(filterMode === 'backwards' && moment(appointmentDate).isBefore(today) 
        || filterMode === 'future' && moment(appointmentDate).isSameOrAfter(today)){
          return true;
        }else{
          return false;
        }

      }).sort((appointmentA, appointmentB) => {

        const appointmentADate = moment(appointmentA.date).format('YYYY-MM-DD, h:mm');
        const appointmentBDate = moment(appointmentB.date).format('YYYY-MM-DD, h:mm');

        if(sortOrder === 'asc'){
          if(moment(appointmentADate).isAfter(appointmentBDate)){
            return 1;
          }else if(moment(appointmentADate).isBefore(appointmentBDate)){
            return -1;
          }else{
            return 0;
          }
        }else{
          if(moment(appointmentADate).isAfter(appointmentBDate)){
            return -1;
          }else if(moment(appointmentADate).isBefore(appointmentBDate)){
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
