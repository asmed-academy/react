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
  menuAnchorElement,
  setMenuAnchorElement,
  onBack,
  filterMode,
  sortOrder,
  changeFilterMode,
  changeSortOrder
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
            anchorEl={menuAnchorElement}
            open={true}
            onClose={() => setMenuAnchorElement(null)}
          >

            <IconMenuItem
              text={
                filterMode === 'future' ?
                sortOrder === 'asc' ? 'Mais distantes primeiro' : 'Mais próximos primeiro' :
                sortOrder === 'asc' ? 'Mais antigos primeiro' : 'Mais recentes primeiro'
              }
              onClick={() => changeSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              Icon={ArrowUpward}
            />
            <IconMenuItem
              text={
                filterMode === 'backwards' ? 'Agendamentos futuros' : 'Agendamentos anteriores'
              }
              onClick={() => changeFilterMode(filterMode === 'future' ? 'backwards' : 'future')}
              Icon={History}
            />
          </Menu>
        </React.Fragment>
      )}
      title="Meus Agendamentos"
    >
      {appointments.map(appointment => (
        <Appointment
          appointment={appointment}
          key={appointment.id}
        />
      ))}
    </Layout>
  );
