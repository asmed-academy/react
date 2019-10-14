import { Scheduling } from "./dumb";
import { mapPropsStream } from "recompose";
import {
  SchedulingOuterProps,
  SchedulingInnerProps,
  SortingOrder,
  ChangeFilter
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
    anchorEl$: new BehaviorSubject<HTMLElement | null>(
      null
    ),
    sortOrder$: new BehaviorSubject<SortingOrder>("asc"),
    filterMode$: new BehaviorSubject<ChangeFilter>("future")
  };

  return combineLatest(
    prop$ as Observable<SchedulingOuterProps>,
    ui.anchorEl$,
    ui.sortOrder$,
    ui.filterMode$
  ).pipe(
    map(([props, menuAnchorEl, sortOrder, filterMode]) => {
      return {
        ...props,
        menuAnchorElement: menuAnchorEl,
        setMenuAnchorElement: (
          anchorEl: HTMLElement | null
        ) => {
          ui.anchorEl$.next(anchorEl);
        },
        sortOrder,
        changeSortOrder: (sortOrder: SortingOrder) =>
          ui.sortOrder$.next(sortOrder),
        filterMode,
        changeFilterMode: (filterMode: ChangeFilter) =>
          ui.filterMode$.next(filterMode)
      } as SchedulingInnerProps;
    })
  );
});

export default enhancer(Scheduling);
