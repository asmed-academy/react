import { Layout } from "./dumb";
import { mapPropsStream } from "recompose";
import {
  BehaviorSubject,
  Observable,
  combineLatest
} from "rxjs";
import {
  LayoutInnerProps,
  LayoutOuterProps
} from "./types";
import { map } from "rxjs/operators";

export const transformer = (
  prop$: Observable<LayoutOuterProps>
) => {
  const ui = {
    drawerState$: new BehaviorSubject<boolean>(false)
  };

  return combineLatest(
    prop$ as Observable<LayoutOuterProps>,
    ui.drawerState$
  ).pipe(
    map(([props, drawerState]) => {
      return {
        ...props,
        drawerState,
        onChangeDrawerState: state =>
          ui.drawerState$.next(state)
      } as LayoutInnerProps;
    })
  );
};

export default mapPropsStream<
  LayoutInnerProps,
  LayoutOuterProps
>(transformer)(Layout);
