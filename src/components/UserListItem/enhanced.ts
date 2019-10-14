import {
  Observable,
  BehaviorSubject,
  combineLatest
} from "rxjs";
import {
  AppointmentOuterProps,
  UserInnerProps
} from "./types";
import { map } from "rxjs/operators";
import { mapPropsStream } from "recompose";
import { UserListItem } from "./dumb";

const transformer = (
  prop$: Observable<UserOuterProps>
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
        } as UserInnerProps)
    )
  );
};

export default mapPropsStream<
  UserInnerProps,
  UserOuterProps
>(transformer)(UserListItem);
