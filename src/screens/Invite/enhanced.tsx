import {
  EnhancerFunction,
  InviteUserDumbProps,
  InviteUserEnhancedProps
} from "./types";
import { BehaviorSubject, combineLatest } from "rxjs";
import { map } from "rxjs/operators";
import { mapPropsStream } from "recompose";
import { Invite } from "./dumb";

const enhancer: EnhancerFunction = prop$ => {
  const ui = {
    fullName$: new BehaviorSubject(""),
    email$: new BehaviorSubject("")
  };

  return combineLatest(prop$, ui.fullName$, ui.email$).pipe(
    map(([props, fullName, email]) => {
      return {
        ...props,
        fullName,
        changeFullName: value => ui.fullName$.next(value),
        email,
        changeEmail: value => ui.email$.next(value)
      } as InviteUserDumbProps;
    })
  );
};

export default mapPropsStream<
  InviteUserDumbProps,
  InviteUserEnhancedProps
>(enhancer)(Invite);
