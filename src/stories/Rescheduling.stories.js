import React from 'react';

import { Rescheduling } from '../screens/Rescheduling/dumb';
export default {
    title: "Rescheduling"
}

export const Default = () => (
    <Rescheduling 
    id = {mockAppointments.id}
    name={mockAppointments.service.name}
    date={mockAppointments.date}
    categoryName = {mockAppointments.service.categoryName}
    // horario={ReschedulingComponentProps.horario}
    />
)

export const mockAppointments =
    {
        id: 'qweqewqe',
        date: new Date('2019-10-15T14:10:30.000'),
        service: {
            id: 'cardiologista-xpto-01',
            name: 'Cardiologia',
            categoryName: 'Serviços Médicos',
            price: 60
        },
        serviceProvider: {
            id: 'magscan',
            name: 'Clínica Magscan'            
        },
        status: 'confirmed'
    }