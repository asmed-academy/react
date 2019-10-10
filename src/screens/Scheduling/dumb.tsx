import React from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, CardContent, Typography, Button, CardActions, } from '@material-ui/core';
import { style } from 'Scheduling'


import { Layout } from '../../components/Layout/dumb';
import moment from 'moment';

type SchedulingProps = {
    userName: string;
    appointments: AppointmentItem[];
    onConfirmAppointment: (appointmentId: string) => void;
    onCancelAppointment: (appointmentId: string) => void;
};

type AppointmentItem = {
    id: string;
    date: Date;
    price: number;
    specialty: {
        id: string;
        name: string;
    }
};

const height = window.innerHeight;

export const Scheduling = ({ userName, appointments, onConfirmAppointment, onCancelAppointment }: SchedulingProps) => (
    <Layout height={height} title="Meus Agendamentos" subtitle= {userName} >
        
        {appointments.map(({ specialty, date, id, price }) => (
            <Card style= {{ marginBottom: '16px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {specialty.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {moment(date).format('DD/MM/YYYY HH:mm')}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary" onClick={() => onCancelAppointment(id)}>
                        Cancelar Agendamento
                    </Button>
                    <Button size="small" color="primary" onClick={() => onConfirmAppointment(id)}>
                        Confirmar Presença
                    </Button>
                </CardActions>
            </Card>
        ))}
    </Layout>
);

export const schedulingComponentProps = ({
   

})
