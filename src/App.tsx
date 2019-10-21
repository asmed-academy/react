import React from "react";
import "./App.css";

import { setObservableConfig } from "recompose";
import {
  from,
} from "rxjs";

import Home from './screens/Home/enhanced';
// import { Form } from './components/Contract/Form';


const rxjsConfig = {
  fromESObservable: from,
  toESObservable: (stream: any) => stream
};

setObservableConfig(rxjsConfig);


export default Home;
