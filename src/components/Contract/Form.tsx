import React from "react";

type FormProps = {
  name: string;
  onChangeName: (name: string) => void;
  semester: string;
  onChangeSemester: (smstr: string) => void;
  course: string;
  onChangeCourse: (course: string) => void;
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
  postalCode,
  onChangePostalCode,
  isLoadingPostalCode
}: FormProps) => (
  <div>
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
      label="CEP"
      value={postalCode}
      onChange={onChangePostalCode}
    />

    {isLoadingPostalCode && (
      <span style={{ color: "#f00" }}>carregando cep</span>
    )}
  </div>
);

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const TextField = ({
  label,
  value,
  onChange
}: TextFieldProps) => (
  <label>
    <span>{label}</span>
    <input
      type="text"
      value={value}
      onChange={evt => onChange(evt.target.value)}
    />
  </label>
);
