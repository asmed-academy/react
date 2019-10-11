import {
  Observable,
  BehaviorSubject,
  combineLatest
} from "rxjs";
import {
  AppointmentOuterProps,
  AppointmentInnerProps
} from "./types";
import { map } from "rxjs/operators";
import { mapPropsStream } from "recompose";
import { Appointment } from "./dumb";

const transformer = (
  prop$: Observable<AppointmentOuterProps>
) => {
  const ui = {
    menuAnchorElement$: new BehaviorSubject<EventTarget | null>(
      null
    )
  };

  return combineLatest(prop$, ui.menuAnchorElement$).pipe(
    map(
      ([props, menuAnchorElement]) =>
        ({
          ...props,
          menuAnchorElement,
          setMenuAnchorElement: (el: EventTarget | null) =>
            ui.menuAnchorElement$.next(el)
        } as AppointmentInnerProps)
    )
  );
};

export default mapPropsStream<
  AppointmentInnerProps,
  AppointmentOuterProps
>(transformer)(Appointment);
