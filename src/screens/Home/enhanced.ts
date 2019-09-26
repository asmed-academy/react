import { mapPropsStream } from "recompose";
import { HomeProps, AddressResult } from "./types";
import { BehaviorSubject, combineLatest } from "rxjs";
import {
  filter,
  tap,
  delay,
  switchMap,
  map,
  startWith
} from "rxjs/operators";

import { Home } from "./dumb";

const enhancer = mapPropsStream<HomeProps, {}>(() => {
  const ui = {
    name: new BehaviorSubject(""),
    semester: new BehaviorSubject(""),
    course: new BehaviorSubject(""),
    enrollment: new BehaviorSubject(""),
    address: new BehaviorSubject(""),
    postalCode: new BehaviorSubject(""),
    isLoadingPostalCode: new BehaviorSubject(false)
  };

  const postalCodeWatcher$ = ui.postalCode.pipe(
    filter(postalCode => {
      return postalCode.length === 8;
    }),
    tap(() => {
      ui.isLoadingPostalCode.next(true);
    }),
    delay(2000),
    switchMap(postalCode => {
      return fetch(
        `http://viacep.com.br/ws/${postalCode}/json`
      ).then(
        result => result.json() as Promise<AddressResult>
      );
    }),
    map(({ logradouro, localidade, uf }) => {
      return `${logradouro}, ${localidade} - ${uf}`;
    }),
    tap(endereco => {
      ui.address.next(endereco);
      ui.isLoadingPostalCode.next(false);
    }),
    filter(() => false),
    startWith(null)
  );

  const formData$ = combineLatest(
    ui.name,
    ui.semester,
    ui.course,
    ui.enrollment,
    ui.address,
    ui.postalCode
  );

  const mainProp$ = combineLatest(
    formData$,
    ui.isLoadingPostalCode
  ).pipe(
    map(
      ([
        [
          name,
          semester,
          course,
          enrollment,
          address,
          postalCode
        ],
        isLoadingPostalCode
      ]) => {
        return {
          name,
          onChangeName: name => ui.name.next(name),
          semester,
          onChangeSemester: semester =>
            ui.semester.next(semester),
          course,
          onChangeCourse: course => ui.course.next(course),
          enrollment,
          onChangeEnrollment: enrollment =>
            ui.enrollment.next(enrollment),
          address,
          postalCode,
          onChangePostalCode: postalCode =>
            ui.postalCode.next(postalCode),
          isLoadingPostalCode
        } as HomeProps;
      }
    )
  );

  return combineLatest(mainProp$, postalCodeWatcher$).pipe(
    map(([props]) => {
      return props;
    })
  );
});

export default enhancer(Home);
