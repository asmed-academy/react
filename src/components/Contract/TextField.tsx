import React from "react";
import styled from "styled-components";

import InputComponent from "@material-ui/core/TextField";

type TextFieldProps = {
  label: string;
  value: string;
  type?: "text" | "date";
  onChange: (value: string) => void;
};

export const TextField = ({
  label,
  value,
  onChange,
  type = 'text'
}: TextFieldProps) => {
  return (
    <TextFieldHolder>
      <InputComponent
        label={label}
        type={type}
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </TextFieldHolder>
  );
};

const TextFieldHolder = styled.label`
  display: flex;
`;

const TextLabel = styled.span`
  display: block;
  width: 80px;
`;
