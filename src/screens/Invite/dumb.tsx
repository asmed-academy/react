import React from "react";
import {
  InviteUserDumbProps,
  InviteUserComponent
} from "./types";
import Layout from "../../components/Layout/enhanced";
import {
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core";

export const Invite: InviteUserComponent = ({
  fullName,
  changeFullName,
  email,
  changeEmail,
  onBack,
  saving,
  submitInvite
}: InviteUserDumbProps) => (
  <Layout title="Convidar Usuários" onBack={onBack}>
    <TextField
      label="Nome Completo"
      value={fullName}
      onChange={evt => changeFullName(evt.target.value)}
      InputProps={{
        fullWidth: true
      }}
      style={{ width: "100%" }}
    />
    <TextField
      label="Email"
      value={email}
      onChange={evt => changeEmail(evt.target.value)}
      InputProps={{
        fullWidth: true
      }}
      style={{ width: "100%" }}
    />
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8px"
      }}
    >
      {!saving && (
        <Button
          variant="contained"
          onClick={() => submitInvite({ fullName, email })}
          fullWidth
        >
          Salvar
        </Button>
      )}
      {saving && <CircularProgress size={20} />}
    </div>
  </Layout>
);
