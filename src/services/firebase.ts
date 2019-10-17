import firebase from "firebase/app";

import "firebase/firestore";
import { from, Observable, Observer } from "rxjs";
import { map } from "rxjs/operators";

var config = {
  apiKey: "AIzaSyDGv8EQIwX00VKJubW1k_oKf56frWJTLdU",
  authDomain: "asmed-uninorte-demo.firebaseapp.com",
  databaseURL: "https://asmed-uninorte-demo.firebaseio.com",
  projectId: "asmed-uninorte-demo",
  storageBucket: "asmed-uninorte-demo.appspot.com",
  messagingSenderId: "491255778303",
  appId: "1:491255778303:web:643e28fdb236eb3342b5ca"
};

firebase.initializeApp(config);

export default firebase;

export const firestore = firebase.firestore();

export const collectionRef = (name: string) => {
  return firestore.collection(name);
};

export const docRef = (
  collectionName: string,
  id: string
) => {
  return collectionRef(collectionName).doc(id);
};

export const docGet = <TOut>(
  collectionName: string,
  id: string,
  mapper = defaultMapper
) => {
  return from(
    docRef(collectionName, id)
      .get()
      .then(obj => <TOut>mapper(obj))
  );
};

export const docListen = <TOut>(
  collectionName: string,
  id: string,
  mapper = defaultMapper
) => {
  return <Observable<TOut>>Observable.create(function(
    observer: Observer<TOut>
  ) {
    return firebase
      .firestore()
      .collection(collectionName)
      .doc(id)
      .onSnapshot(
        data => {
          observer.next(mapper<TOut>(data) as TOut);
        },
        error => {
          observer.error(error);
        }
      );
  });
};

const defaultMapper = <TOut>(
  obj: firebase.firestore.DocumentSnapshot
): TOut | null => {
  if (obj instanceof Error) {
    throw obj;
  }

  return obj && obj.exists && typeof obj.data === "function"
    ? (({ id: obj.id, ...obj.data() } as unknown) as TOut)
    : null;
};

export type QueryConfiguration = {
  limit?: number | null;
  orderBy?: {
    field: string;
    direction: firebase.firestore.OrderByDirection;
  };
  conditions?: QueryCondition[];
};

export type QueryCondition = {
  field: string;
  op: firebase.firestore.WhereFilterOp;
  value: any;
}

export const createQuery = (
  collectionName: string,
  config: QueryConfiguration = {}
) => {
  const {
    limit = null,
    orderBy = null,
    conditions = []
  } = config;

  let query:
    | firebase.firestore.CollectionReference
    | firebase.firestore.Query = collectionRef(
    collectionName
  );

  conditions.forEach(({ field, op, value }) => {
    query = query.where(field, op, value);
  });

  if (orderBy) {
    query = query.orderBy(orderBy.field, orderBy.direction);
  }

  if (limit) {
    query = query.limit(limit);
  }

  return query;
};

export const queryOnce = <TOut>(
  collectionName: string,
  config: QueryConfiguration = {},
  mapper = defaultMapper
) =>
  createQuery(collectionName, config)
    .get()
    .then(snapshot =>
      snapshot.docs.map(doc => <TOut>mapper(doc))
    );

export const queryFirstOnce = <TOut>(
  collectionName: string,
  config: QueryConfiguration = {},
  mapper = defaultMapper
) =>
  queryOnce<TOut>(collectionName, config, mapper).then(
    ([data]) => data || null
  );

export const queryAndListen = <TOut>(
  collectionName: string,
  config: QueryConfiguration = {},
  mapper = defaultMapper
): Observable<TOut[]> => {
  return Observable.create((observer: Observer<TOut[]>) => {
    return createQuery(collectionName, config).onSnapshot(
      snapshot => {
        const docs = snapshot.docs.map(
          obj => mapper<TOut>(obj) as TOut
        );

        observer.next(docs);
      },
      (err: firebase.FirebaseError) => {
        if (err.code === "firestore/permission-denied") {
          return observer.next([]);
        }

        console.warn(
          `FIRESTORE_ERROR queryAndListen(${collectionName}).onSnapshot`
        );
        console.log(err);

        observer.error(err);
      }
    );
  });
};

export const queryAndListenFirst = <TOut>(
  collectionName: string,
  config: QueryConfiguration = {},
  mapper = defaultMapper
) =>
  queryAndListen<TOut>(collectionName, config, mapper).pipe(
    map(([data]) => data || null)
  );

export const batch = firebase.firestore().batch();

export const add = (collectionName: string, value: any) =>
  collectionRef(collectionName)
    .add(value)
    .then(({ id }) => id);

export const set = (
  collectionName: string,
  id: string,
  value: any,
  merge = true
) =>
  collectionRef(collectionName)
    .doc(id)
    .set(value, { merge });

export const remove = (
  collectionName: string,
  id: string
) =>
  collectionRef(collectionName)
    .doc(id)
    .delete()
    .then(() => true);
