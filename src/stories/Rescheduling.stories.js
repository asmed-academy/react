import React from 'react';

import { Rescheduling } from '../screens/Rescheduling/dumb';

export default {
    title: "Rescheduling"
}

export const Default = () => (
    <Rescheduling 
    name={ReschedulingComponentProps.speciality.name}
    date={ReschedulingComponentProps.date}
    horario={ReschedulingComponentProps.horario}
    />
)

const ReschedulingComponentProps = {
    speciality: {
        id: "a4sd5",
        name: "Cardiologia",
      },
      date: "30/10/2019",
      horario: "17:00",
};