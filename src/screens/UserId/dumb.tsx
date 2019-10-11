import React from "react";
import styled from "styled-components";
import color from "@material-ui/core/colors/grey";
import { Hidden, TextField, Icon } from "@material-ui/core";
import {
  Person,
  CalendarToday,
  CreateNewFolder,
  FolderOpenOutlined,
  FolderShared,
  FolderSharedOutlined,
  FolderSharedRounded,
  FolderSharedSharp,
  FolderSharedTwoTone,
  FolderSpecial,
  Dock,
  HowToReg,
  QueryBuilder,
  Assignment
} from "@material-ui/icons";
import { UserField } from "./UserField";
import moment from "moment";
import { TimePickerAndroid } from "react-native";

type UserIdProps = {
  name: string;
  birthday: Date;
  cpf: string;
  assinatura: Date;
  status: string;
};

type AvatarProps = {
  diameter: number;
  imageSrc: string;
};

const Avatar = ({ diameter, imageSrc }: AvatarProps) => (
  <div
    style={{
      width: `${diameter}px`,
      height: `${diameter}px`,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: `${diameter / 2}px`
    }}
  >
    <img
      style={{ width: `${diameter}px` }}
      src={imageSrc}
    />
  </div>
);

export const UserId = ({
  name,
  birthday,
  cpf,
  assinatura,
  status
}: UserIdProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    }}
  >
    <div>
      <Avatar
        diameter={300}
        imageSrc="logo-asmed.png"
      />
    </div>
    <div>
      <Avatar diameter={400} imageSrc="img/person.png" />
    </div>
    <UserField label="Nome" text={name} Icon={Person} />
    <div style={{ display: "flex", width: "100%" }}>
      <UserField
        label="Dt. Nascimento"
        text={moment(birthday).format("DD/MM/YYYY")}
        Icon={CalendarToday}
      />
      <UserField label="CPF" text={cpf} Icon={Assignment} />
    </div>
    <div style={{ display: "flex", width: "100%" }}>
      <UserField
        label="Val. Assinatura"
        text={moment(assinatura).format("DD/MM/YYYY")}
        Icon={QueryBuilder}
      />
      <UserField
        label="Status"
        text={status}
        Icon={HowToReg}
        verde
      />
    </div>
  </div>
);
