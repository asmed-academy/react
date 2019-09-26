import React from "react";
import styled from "styled-components";
import { TextField } from "./TextField";

export type FormProps = {
  name: string;
  onChangeName: (name: string) => void;
  semester: string;
  onChangeSemester: (smstr: string) => void;
  course: string;
  onChangeCourse: (course: string) => void;
  enrollment: string;
  onChangeEnrollment: (enrollment: string) => void;
  postalCode: string;
  onChangePostalCode: (postalCode: string) => void;
  isLoadingPostalCode: boolean;
};

export const Form = ({
  name,
  onChangeName,
  semester,
  onChangeSemester,
  course,
  onChangeCourse,
  enrollment,
  onChangeEnrollment,
  postalCode,
  onChangePostalCode,
  isLoadingPostalCode
}: FormProps) => (
  <FormHolder>
    <TextField
      label="Nome"
      value={name}
      onChange={onChangeName}
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

    {isLoadingPostalCode && (
      <span style={{ color: "#f00" }}>carregando cep</span>
    )}
  </FormHolder>
);

const FormHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

