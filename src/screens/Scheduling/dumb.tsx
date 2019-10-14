import React from "react";
import styled from "styled-components";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions,
  Menu,
  MenuItem
} from "@material-ui/core";

import { GenericMenuButton } from "../../components/Layout/GenericMenuButton";

import Layout from "../../components/Layout/enhanced";
import moment from "moment";
import {
  Settings,
  ArrowDownward,
  ArrowUpward,
  History
} from "@material-ui/icons";

import { SchedulingInnerProps } from "./types";
import Appointment from "../../components/Appointment/enhanced";
import { IconMenuItem } from "../../components/IconMenuItem";

export const Scheduling = ({
  appointments,
  menuAnchorEl,
  setMenuAnchorElement,
  onBack
}: SchedulingInnerProps) => (
  <Layout
    onBack={onBack}
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
          anchorEl={menuAnchorEl}
          open={!!menuAnchorEl}
          onClose={() => setMenuAnchorElement(null)}
        >
          <IconMenuItem
            text="Mais distantes primeiro"
            onClick={() => {}}
            Icon={ArrowUpward}
          />
          <IconMenuItem
            text="Agendamentos anteriores"
            onClick={() => {}}
            Icon={History}
          />
        </Menu>
      </React.Fragment>
    )}
    title="Convidar Usuário"
  >
    {appointments.map(appointment => (
      <Appointment
        appointment={appointment}
        key={appointment.id}
      />
    ))}
  </Layout>
);
