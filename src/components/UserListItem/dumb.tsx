import React from "react";
import { UserInnerProps } from "./types";
import {
  Card,
  IconButton,
  Menu,
  Typography,
  CardHeader,
  Avatar
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { IconMenuItem } from "../IconMenuItem";
import HowToRegIcon from '@material-ui/icons/HowToReg';
import EditIcon from '@material-ui/icons/Edit';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import BlockIcon from '@material-ui/icons/Block';


export const UserListItem = ({
  menuAnchorElement,
  setMenuAnchorElement,
  user,
  onAction
}: UserInnerProps) => (
    <Card>
      <CardHeader
        title="Rebecca da Silva"
        subheader="RebeCa.beca@hotmail.com"
        action={
          <React.Fragment>
            <IconButton
              onClick={evt =>
                setMenuAnchorElement(evt.target as Element)
              }
            >
              <MoreVert />
            </IconButton>
            <Menu
              anchorEl={menuAnchorElement}
              open={!!menuAnchorElement}
              onClose={() => setMenuAnchorElement(null)}
            >
              <IconMenuItem
                Icon={BlockIcon}
                text="Desativar Usuário"
                onClick={() => { }}
              />

              <IconMenuItem
                Icon={HowToRegIcon}
                text="Ativar Usuário"
                onClick={() => { }}
              />

              <IconMenuItem
                Icon={EditIcon}
                text="Editar Perfil"
                onClick={() => { }}
              />

              <IconMenuItem
                Icon={VpnKeyRoundedIcon}
                text="Redefinir Senha"
                onClick={() => { }}
              />

            </Menu>
          </React.Fragment>
        }
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }

      />
    </Card>
  );
