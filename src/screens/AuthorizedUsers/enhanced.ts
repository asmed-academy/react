import UserAuth from './dumb';
import {SortingEngine} from './sortingEngine';

import { mapPropsStream } from "recompose";
import {
  AuthorizedUsersInnerProps,
  AuthorizedUsersOuterProps,
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
  AuthorizedUsersInnerProps,
  AuthorizedUsersOuterProps
>(prop$ => {
  const ui = {
    anchorEl$: new BehaviorSubject<HTMLElement | null>(
      null
    ),
    sortOrder$: new BehaviorSubject<SortingOrder>("asc"),
    filterMode$: new BehaviorSubject<ChangeFilter>("active")
  };

  return combineLatest(
    prop$ as Observable<AuthorizedUsersOuterProps>,
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
    } as AuthorizedUsersInnerProps
  })
  );
});

export default enhancer(SortingEngine);
