import { mapPropsStream } from "recompose";

import { RxTests } from "./dumb";
import {
  RxTestsInnerProps,
  RxTestsOuterProps
} from "./types";
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  Subscribable
} from "rxjs";
import {
  map,
  debounceTime,
  filter,
  withLatestFrom,
  startWith
} from "rxjs/operators";

const enhancer = mapPropsStream<
  RxTestsInnerProps,
  RxTestsOuterProps
>((prop$: Subscribable<RxTestsOuterProps>) => {
  const ui = {
    query$$: new BehaviorSubject("")
  };

  const matchingItems$ = ui.query$$.pipe(
    filter(query => query.length >= 2),
    debounceTime(300),
    withLatestFrom(prop$),
    map(([query, { data }]) => {
      return data.filter(country => {
        return country.includes(query);
      });
    }),
    startWith([])
  );

  return combineLatest(
    prop$,
    ui.query$$,
    matchingItems$
  ).pipe(
    map(([{ data }, query, matchingItems]) => {
      return {
        query,
        data,
        matchingItems,
        onChangeQuery: query => ui.query$$.next(query)
      } as RxTestsInnerProps;
    })
  );
});

export default enhancer(RxTests);
