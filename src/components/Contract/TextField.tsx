import React from "react";
import styled from "styled-components";

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextField = ({
  label,
  value,
  onChange
}: TextFieldProps) => (
  <TextFieldHolder>
    <TextLabel>{label}</TextLabel>
    <input
      type="text"
      value={value}
      onChange={evt => onChange(evt.target.value)}
    />
  </TextFieldHolder>
);

const TextFieldHolder = styled.label`
    display: flex;
`;

const TextLabel = styled.span`
    display: block;
    width: 80px;
`;
