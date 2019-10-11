import { mapPropsStream } from "recompose";
import { SchedulingInnerProps } from "./types";
import { Observable } from "rxjs";
import { Scheduling } from "./dumb";

type TransformerFunction = (
  prop$: Observable<SchedulingInnerProps>
) => Observable<SchedulingInnerProps>;

let transformer: TransformerFunction;

export const SortingEngine = mapPropsStream<
  SchedulingInnerProps,
  SchedulingInnerProps
>(transformer)(Scheduling);
