import React from "react";
import { action } from "@storybook/addon-actions";

import { RxTests as RxTests_Dumb } from "../components/RxTests/dumb";
import RxTests_Smart from '../components/RxTests/smart';

import { suggestions } from '../components/RxTests/mocks';

export default {
  title: "RxTests"
};

export const Burro_PadrãoVazio = () => (
    <RxTests_Dumb
      query=""
      onChangeQuery={action("onChangeQuery")}
      matchingItems={[]}
    />
  );

export const Burro_EnquantoPreenche = () => (
  <RxTests_Dumb
    query="Bra"
    onChangeQuery={action("onChangeQuery")}
    matchingItems={[
      "Brasil",
      "Brastemp",
      "Brado retumbante"
    ]}
  />
);

export const ComponenteInteligente = () => (
    <RxTests_Smart data={suggestions} />
)


