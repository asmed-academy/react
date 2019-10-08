import { mapPropsStream } from "recompose";
import { HomeInnerProps, HomeOuterProps } from "./types";
import {
  BehaviorSubject,
  combineLatest,
  Observable
} from "rxjs";
import {
  filter,
  tap,
  delay,
  switchMap,
  map,
  startWith
} from "rxjs/operators";

import { Home } from "./dumb";
import { AddressResult } from "../../components/Form/types";
import { ContractData } from "../../components/Contract/types";

const enhancer = mapPropsStream<
  HomeInnerProps,
  HomeOuterProps
>(prop$ => {
  const ui = {
    contractData: new BehaviorSubject<ContractData | null>(
      null
    )
  };

  const onSubmitData = (data: ContractData | null) => {
    ui.contractData.next(data);
  };

  return combineLatest(ui.contractData, prop$ as Observable<
    HomeOuterProps
  >).pipe(
    map(([contractData, { findPostalCode }]) => {
      return {
        contractData,
        onSubmitData,
        findPostalCode
      };
    })
  );
});

export default enhancer(Home);
