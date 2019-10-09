import React from "react";

import { UserId } from '../screens/UserId/dumb';

export default {
    title: "UserId"
};

export const Default = () => (
    <UserId
        name="Altenor da Silva Sauro" 
        birthday={new Date('1990-10-09T00:00:00.000-04:00')} 
        cpf="123.456.789-00"
        assinatura= {new Date('2021-05-28T00:00:00.000-04:00')}
        status="Assinatura Válida" 
    />
);