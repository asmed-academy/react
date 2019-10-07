import React from "react";
import { action } from "@storybook/addon-actions";

import { Contract } from "../components/Contract/dumb";

export default {
  title: "Contrato"
};

const contractData = {
  name: "Fukano de Tal",
  semester: "9",
  course: "EngCompo",
  address:
    "Rua dos Bobos, 0 Teste - Santa Teresa - Terra do Nunca - PQP",
  birthday: "1987-05-28",
  enrollment: "12312312321"
};

export const Preenchido = () => (
  <Contract {...contractData} />
);
