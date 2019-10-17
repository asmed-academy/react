import { queryAndListen } from '../../services/firebase';
import { SmartifierFunction, SchedulingRootProps, SchedulingOuterProps, SchedulingInnerProps } from './types';
import { combineLatest } from 'rxjs';
import { Appointment } from '../../domain/Appointment.domain';
import { map, startWith } from 'rxjs/operators';
import { mapPropsStream } from 'recompose';
import SchedulingEnhanced from './enhanced';

const smartifier: SmartifierFunction = (prop$) => {
  const watchAppointments$ = queryAndListen<Appointment>('appointments').pipe(
    startWith([])
  );

  return combineLatest(prop$, watchAppointments$).pipe(
    map(([props, appointments]) => {
      return {
        ...props,
        appointments
      } as SchedulingOuterProps;
    })
  )
}

export default mapPropsStream<SchedulingOuterProps, SchedulingRootProps>(smartifier)(SchedulingEnhanced)