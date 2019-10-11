import React from 'react';
import { Appointment } from '../../metadata/Appointment';
import { Layout } from '../../components/Layout/dumb';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { DateComponent } from './DateComponent';
import { TimeComponent } from './TimerComponent';
import { ButtonComponent } from './ButtonComponent';

type ReschedulingProps = {
  speciality: {
    id: string;
    name: string;
  };
  date: Date;
  horario: string;
};

export const Rescheduling = (speciality, date, horario: ReschedulingProps) => (
  <Layout title="Reagendar Atendimento" subtitle="Fulano de Tal da Silva Sauro">
    <FormControl>
      <InputLabel>Serviço</InputLabel>
      <Input value={speciality.name}/>
      <FormHelperText>Consultas Médicas</FormHelperText>
    </FormControl>
    <DateComponent />
    <TimeComponent />
    <ButtonComponent />
  </Layout>
)