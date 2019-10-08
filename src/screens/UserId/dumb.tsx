import React from "react";
import styled from 'styled-components';
import color from "@material-ui/core/colors/grey";
import { Hidden } from "@material-ui/core";

type UserIdProps = {
    name: string,
    birthday: string,
    cpf: string
};

type AvatarProps = {
    diameter: number;
    imageSrc: string;
};

const Avatar = ({ diameter, imageSrc }: AvatarProps) => (
    <div style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: `${diameter/2}px`
    }}>
        <img style={{ width: `${diameter}px` }} src={imageSrc} />
    </div>
);

export const UserId = ({ name, birthday, cpf }: UserIdProps) => (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div>
            <Avatar diameter= {300} imageSrc="img/asmed_logo.png"/>
        </div>
        <div>
            <Avatar diameter={200} imageSrc="img/tereza-fotoruim_300_400.jpg" />
        </div>
        <div>
            <h2>Nome: {name}</h2>
        </div>
        <div>
            <h2>Data de Nascimento: {birthday}</h2>
        </div>
        <div>
            <h2>CPF: {cpf}</h2>
        </div>
    </div>
);