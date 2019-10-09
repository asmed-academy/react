import React from 'react';

import { action } from '@storybook/addon-actions';

import { Scheduling } from '../screens/Scheduling/dumb';

export default {
    title: "Scheduling"
};

export const Padrão = () => (
    <Scheduling
        userName="Fulano de Tal"
        appointments={schedulingComponentProps.appointments}
        onConfirmAppointment={action('onConfirmAppointment')}
        onCancelAppointment={action('onCancelAppointment')}
    />
)

const schedulingComponentProps = {
    name: "Fukano de Tal",
    appointments: [{
        id: 'xpto01',
        date: new Date('2019-10-15T15:00:00-04:00'),
        price: 65,
        specialty: {
            id: 'xptoaasdqwe',
            name: 'Cardiologia'
        }
    },
    {
        id: 'qwerty123',
        date: new Date('2019-10-25T14:00:00-04:00'),
        price: 60,
        specialty: {
            id: 'pokasdkad',
            name: 'Dermatologista'
        }
    }]
};

const schedulingDados = {
    name: "Fukano de Tal",
    appointments: [{
        specialty: {
            id: 'xptoaasdqwe',
            name: 'Cardiologia'
        }
    },
    {
        date: new Date('2019-10-15T15:00:00-04:00'),
        price: 65,
        specialty: {
            id: 'xptoaasdqwe',
            name: 'Cardiologia'
        }
    }]
};