import React from "react";

import styled from "styled-components";

import Layout from "../../components/Layout/enhanced";
import { GenericMenuButton } from "../../components/Layout/GenericMenuButton";
import {
  Settings,
  ArrowUpward,
  MoreVert,
  Done
} from "@material-ui/icons";
import {
  Menu,
  Card,
  CardHeader,
  IconButton
} from "@material-ui/core";
import { IconMenuItem } from "../../components/IconMenuItem";
import {
  AuthorizedUsersInnerProps,
  AuthorizedUsersScreenComponent
} from "./types";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";

export const AuthorizedUsers: AuthorizedUsersScreenComponent = ({
  users,
  setMenuAnchorElement,
  menuAnchorElement,
  filterMode,
  sortOrder,
  changeSortOrder
}: AuthorizedUsersInnerProps) => (
  <Layout
    title="Usuários Autorizados"
    renderRight={() => (
      <React.Fragment>
        <GenericMenuButton
          Icon={Settings}
          tooltip="Configurações"
          onClick={evt => {
            setMenuAnchorElement(evt.target as Element);
          }}
        />
        <Menu
          anchorEl={menuAnchorElement}
          open={true}
          onClose={() => setMenuAnchorElement(null)}
        >
          <IconMenuItem
            // text={
            //     filterMode
            //     ? sortOrder === "asc"
            //       ? "Mais distantes primeiro"
            //       : "Mais próximos primeiro"
            //     : sortOrder === "asc"
            //     ? "Mais antigos primeiro"
            //     : "Mais recentes primeiro"
            // }
            text={"Convidar Usuário"}
            onClick={() =>
              //   changeSortOrder(
              //     sortOrder === "asc" ? "desc" : "asc"
              //   )
              alert("convidar Usuário")
            }
            Icon={PersonAddIcon}
          />
          <IconMenuItem
            // text={
            //     filterMode
            //     ? sortOrder === "asc"
            //       ? "Mais distantes primeiro"
            //       : "Mais próximos primeiro"
            //     : sortOrder === "asc"
            //     ? "Mais antigos primeiro"
            //     : "Mais recentes primeiro"
            // }
            text={"Ver Ativos"}
            onClick={() => alert("Ver Ativos")}
            Icon={CheckIcon}
          />

          <IconMenuItem
            text={"Ver Inativos"}
            onClick={() => alert("Ver Inativos")}
            Icon={CloseIcon}
          />
          <IconMenuItem
            text={"Ordenação A-Z"}
            onClick={() => alert("Ordenação A-Z")}
            Icon={SortByAlphaIcon}
          />
        </Menu>
      </React.Fragment>
    )}
  >
    {users.map(user => (
      <div key={user.id}>{user.name}</div>
    ))}
  </Layout>
);
