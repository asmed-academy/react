import React from "react";

import { UserId } from '../screens/UserId/dumb';

export default {
    title: "UserId"
};

export const Default = () => (
    <UserId
     name="Fulana de Tal da Silva Saura" 
     birthday="01/01/2001" 
     cpf="123456789" 
    />
);