import { Scheduling } from "./dumb";
import { mapPropsStream } from "recompose";
import {
  SchedulingOuterProps,
  SchedulingInnerProps
} from "./types";
import {
  combineLatest,
  BehaviorSubject,
  Observable
} from "rxjs";
import { map } from "rxjs/operators";

const enhancer = mapPropsStream<
  SchedulingInnerProps,
  SchedulingOuterProps
>(prop$ => {
  const ui = {
    anchorEl$: new BehaviorSubject<HTMLElement | null>(null)
  };

  return combineLatest(
    prop$ as Observable<SchedulingOuterProps>,
    ui.anchorEl$
  ).pipe(
    map(([props, menuAnchorEl]) => {
      return {
        ...props,
        menuAnchorEl,
        setMenuAnchorElement: (
          anchorEl: HTMLElement | null
        ) => {
          ui.anchorEl$.next(anchorEl);
        }
      } as SchedulingInnerProps;
    })
  );
});

export default enhancer(Scheduling);
