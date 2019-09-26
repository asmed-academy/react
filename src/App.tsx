import React from "react";
import "./App.css";

import {
  createEventHandler,
  mapPropsStream
} from "recompose";

import { Contract } from "./components/Contract/Contract";
import { Form } from "./components/Contract/Form";

import { setObservableConfig } from "recompose";
import {
  from,
  Observable,
  combineLatest,
  BehaviorSubject
} from "rxjs";

import {
  map,
  filter,
  startWith,
  tap,
  switchMap,
  delay
} from "rxjs/operators";

import { ContractData } from "./components/Contract/types";

const rxjsConfig = {
  fromESObservable: from,
  toESObservable: (stream: any) => stream
};

setObservableConfig(rxjsConfig);

const data = {
  city: "Manaux",
  state: "Amazonas",
  enrollment: "XPAQEWQRA",
  birthday: new Date("1987-05-28")
};

type AppInnerProps = {
  name: string;
  onChangeName: (name: string) => void;
  semester: string;
  onChangeSemester: (smstr: string) => void;
  course: string;
  onChangeCourse: (course: string) => void;
  address: string;
  postalCode: string;
  onChangePostalCode: (postalCode: string) => void;
  isLoadingPostalCode: boolean;
};

const enhancer = mapPropsStream<AppInnerProps, {}>(_ => {
  const ui = {
    name: new BehaviorSubject(""),
    semester: new BehaviorSubject(""),
    course: new BehaviorSubject(""),
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
    startWith(null)
  );

  const mainProp$ = combineLatest(
    ui.name,
    ui.semester,
    ui.course,
    ui.address,
    ui.postalCode,
    ui.isLoadingPostalCode
  ).pipe(
    map(
      ([
        name,
        semester,
        course,
        address,
        postalCode,
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
          address,
          postalCode,
          onChangePostalCode: postalCode =>
            ui.postalCode.next(postalCode),
          isLoadingPostalCode
        } as AppInnerProps;
      }
    )
  );

  return combineLatest(mainProp$, postalCodeWatcher$).pipe(
    map(([props]) => {
      return props;
    })
  );
});

type AddressResult = {
  logradouro: string;
  localidade: string;
  uf: string;
};

const App = ({
  name,
  onChangeName,
  semester,
  onChangeSemester,
  course,
  onChangeCourse,
  address,
  postalCode,
  onChangePostalCode,
  isLoadingPostalCode
}: AppInnerProps) => {
  return (
    <div>
      {/* <Header /> */}
      <div style={{ width: "100%" }}>
        <Form
          name={name}
          onChangeName={onChangeName}
          semester={semester}
          onChangeSemester={onChangeSemester}
          course={course}
          onChangeCourse={onChangeCourse}
          postalCode={postalCode}
          onChangePostalCode={onChangePostalCode}
          isLoadingPostalCode={isLoadingPostalCode}
        />
        <Contract
          name={name}
          semester={semester}
          course={course}
          address={address}
          {...data}
        />
      </div>
    </div>
  );
};

export default enhancer(App);
