import React from "react";

import { ContractData } from "./types";

export const Contract = ({
  name,
  semester,
  course,
  enrollment,
  birthday,
  address,
  city,
  state
}: ContractData) => (
  <div>
    <h4>
      TERMO DE COMPROMISSO DE ESTÁGIO VOLUNTÁRIO VISANDO A
      FORMAÇÃO PROFISSIONAL, SEM VINCULAÇÃO EMPREGATÍCIA,
      NOS TERMOS DA LEI 6.494 DE 07.12.77.
    </h4>
    <p>
      ASMED Tecnologia Ltda, neste ato representada por.
      Altenor Gonçalves da Silva, na qualidade de CEO,
      situada à Rua 10 de Julho, 873 - Incubadora Uninorte
      empreende , na cidade de Manaus, estado do Amazonas,
      doravante denominada CONCEDENTE e o estudante{" "}
      <strong>{name}</strong>, regularmente matriculado no{" "}
      <strong>{semester}º período</strong> do curso de{" "}
      <strong>{course}</strong>, nº de matrícula{" "}
      <strong>{enrollment}</strong>, da Uninorte, nascido em{" "}
      {birthday.getFullYear()}, residente e domiciliado(a)
      em <strong>{address}</strong>,
      doravante denominado(a) ESTAGIÁRIO(A), celebram o
      presente TERMO DE COMPROMISSO, mediante as cláusulas
      seguintes:
    </p>
    <p>
      CLÁUSULA PRIMEIRA: O(A) CONCEDENTE compromete-se a
      conceder ao (a) ESTAGIÁRIO(A), oportunidade de receber
      treinamento específico como prática dos ensinamentos
      teóricos que recebe na Universidade.
    </p>
    <p>
      CLÁUSULA SEGUNDA: O(A) ESTAGIÁRIO(A), compromete-se a:
    </p>
    <ul>
      <li>
        * Cumprir o estágio, de acordo com o estabelecido na
        Cláusula Terceira, em jornada compatível com o seu
        horário escolar;
      </li>

      <li>
        * Cumprir fielmente o programa de estágio,
        comunicando o(a) CONCEDENTE, em tempo hábil sua
        impossibilidade de desenvolvê-lo, quer quanto aos
        aspectos técnicos relacionados ao estágio
        propriamente dito, quer quanto aos horários e
        duração, fixados no presente Termo de Compromisso;
      </li>

      <li>
        * Apresentar, na forma e segundo os padrões
        estabelecidos, relatório sobre as atividades de
        estágio ao(a) CONCEDENTE.
      </li>
    </ul>
  </div>
);
