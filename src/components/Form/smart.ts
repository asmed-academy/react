import { mapPropsStream } from "recompose";
import { FormInnerProps, AddressResult, FormOuterProps } from "./types";
import {
  BehaviorSubject,
  Observable,
  combineLatest
} from "rxjs";
import {
  filter,
  tap,
  delay,
  switchMap,
  startWith,
  map,
  withLatestFrom
} from "rxjs/operators";

import { Form } from "./dumb";

const enhancer = mapPropsStream<
  FormInnerProps,
  FormOuterProps
>(prop$ => {
  const ui = {
    name: new BehaviorSubject(""),
    semester: new BehaviorSubject(""),
    course: new BehaviorSubject(""),
    birthday: new BehaviorSubject(""),
    enrollment: new BehaviorSubject(""),
    address: new BehaviorSubject(""),
    addressNumber: new BehaviorSubject(""),
    addressComplement: new BehaviorSubject(""),
    postalCode: new BehaviorSubject(""),
    isLoadingPostalCode: new BehaviorSubject(false),
    foundAddress: new BehaviorSubject<AddressResult | null>(
      null
    )
  };

  const postalCodeWatcher$ = ui.postalCode.pipe(
    filter(postalCode => {
      return postalCode.length === 8;
    }),
    tap(() => {
      ui.isLoadingPostalCode.next(true);
    }),
    delay(2000),
    withLatestFrom(prop$ as Observable<FormOuterProps>),
    switchMap(([postalCode, { findPostalCode }]) => {
        return findPostalCode(postalCode);
    }),
    tap(foundAddress => {
      ui.foundAddress.next(foundAddress);
    }),
    map(({ logradouro, localidade, uf, bairro }) => {
      return `${logradouro}, ${bairro} - ${localidade} - ${uf}`;
    }),
    tap(endereco => {
        ui.address.next(endereco);
      ui.isLoadingPostalCode.next(false);
    }),
    filter(() => false),
    startWith(null)
  );

  const addressFoundAtLeastOnce$ = ui.foundAddress.pipe(
    filter(addr => addr != null)
  ) as Observable<AddressResult>;

  const addressReconciler$ = combineLatest(
    addressFoundAtLeastOnce$,
    ui.addressNumber,
    ui.addressComplement
  ).pipe(
    map(
      ([
        { logradouro, bairro, localidade, uf },
        number,
        complement
      ]) => {
        const complementText = complement
          ? ` ${complement}`
          : "";

        return `${logradouro}, ${number}${complementText} - ${bairro} - ${localidade} - ${uf}`;
      }
    ),
    tap(endereco => {
      ui.address.next(endereco);
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
    ui.postalCode,
    ui.birthday,
    ui.addressNumber,
    ui.addressComplement
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
          postalCode,
          birthday,
          addressNumber,
          addressComplement
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
          birthday,
          onChangeBirthday: birthday =>
            ui.birthday.next(birthday),
          addressComplement,
          onChangeAddressNumber: addressNumber =>
            ui.addressNumber.next(addressNumber),
          addressNumber,
          onChangeAddressComplement: complement =>
            ui.addressComplement.next(complement),
          isLoadingPostalCode
        } as FormInnerProps;
      }
    )
  );

  return combineLatest(
    mainProp$,
    postalCodeWatcher$,
    addressReconciler$
  ).pipe(
    map(([props]) => {
      return props;
    })
  );
});

export default enhancer(Form);
