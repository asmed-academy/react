import React from "react";
import { action } from "@storybook/addon-actions";

import Form from "../components/Form/smart";

export default {
  title: "Formulário"
};

const logAction = fieldName => newValue =>
  `${fieldName} changed to ${newValue}`;

const fakePostalCodeFetcher = postalCode =>
  Promise.resolve({
      logradouro: 'Rua dos Bobos',
      bairro: 'Santa Teresa',
      localidade: 'Terra do Nunca',
      uf: 'PQP'
  });

export const Vazio = () => (
  <Form
    findPostalCode={fakePostalCodeFetcher}
  />
);
