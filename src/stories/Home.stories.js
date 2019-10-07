import React from "react";
import { action } from "@storybook/addon-actions";

import { Home } from "../screens/Home/dumb";
import HomeEnhanced from "../screens/Home/enhanced";
import HomeSmart from "../screens/Home/smart";

export default {
  title: "Home"
};

export const HomeSemPreencherOsDados = () => (
  <Home
    contractData={null}
    onSubmitData={action("onSubmitData")}
  />
);

const contractData = {
  name: "Fukano de Tal",
  semester: "9",
  course: "EngCompo",
  address:
    "Rua dos Bobos, 0 Teste - Santa Teresa - Terra do Nunca - PQP",
  birthday: "1987-05-28",
  enrollment: "12312312321"
};

const fakePostalCodeFetcher = postalCode =>
  Promise.resolve({
    logradouro: "Rua dos Bobos",
    bairro: "Santa Teresa",
    localidade: "Terra do Nunca",
    uf: "PQP"
  });

export const HomeComOsDadosJáPreenchidos = () => (
  <Home
    contractData={contractData}
    onSubmitData={action("onSubmitData")}
  />
);

export const HomeAperfeiçoadoFuncionando = () => (
  <HomeEnhanced findPostalCode={fakePostalCodeFetcher} />
);

export const HomeInteligenteFuncionando = () => (
  <HomeSmart />
);
