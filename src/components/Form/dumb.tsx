import React from "react";
import styled from "styled-components";
import { TextField } from "../Contract/TextField";

import Button from "@material-ui/core/Button";
import { FormInnerProps } from "./types";

export const Form = ({
  address,
  name,
  onChangeName,
  semester,
  onChangeSemester,
  course,
  onChangeCourse,
  enrollment,
  onChangeEnrollment,
  birthday,
  onChangeBirthday,
  postalCode,
  onChangePostalCode,
  addressNumber,
  onChangeAddressNumber,
  addressComplement,
  onChangeAddressComplement,
  isLoadingPostalCode,
  onSubmitData
}: FormInnerProps) => (
  <FormHolder>
    <TextField
      label="Nome"
      value={name}
      onChange={onChangeName}
    />

    <TextField
      label="Dt Aniversário"
      type="date"
      value={birthday}
      onChange={onChangeBirthday}
    />

    <TextField
      label="Período"
      value={semester}
      onChange={onChangeSemester}
    />

    <TextField
      label="Curso"
      value={course}
      onChange={onChangeCourse}
    />

    <TextField
      label="Nº de Matricula"
      value={enrollment}
      onChange={onChangeEnrollment}
    />

    <TextField
      label="CEP"
      value={postalCode}
      onChange={onChangePostalCode}
    />

    <TextField
      label="Nº"
      value={addressNumber}
      onChange={onChangeAddressNumber}
    />

    <TextField
      label="Complemento"
      value={addressComplement}
      onChange={onChangeAddressComplement}
    />

    {isLoadingPostalCode && (
      <span style={{ color: "#f00" }}>carregando cep</span>
    )}

    <strong>{address}</strong>

    <Button
      variant="contained"
      onClick={() => {
        onSubmitData();
      }}
    >
      Salvar
    </Button>
  </FormHolder>
);

const FormHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
