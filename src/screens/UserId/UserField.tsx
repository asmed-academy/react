import React from 'react';
import { SvgIconComponent } from '@material-ui/icons';
import { TextField } from '@material-ui/core';

type UserFieldProps = {
    label: string;
    text: string;
    Icon: SvgIconComponent;
    verde?: boolean;
};

export const UserField = ({ label, text, Icon, verde = false }: UserFieldProps) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: '10px'
    }}>
        <Icon style={{
            width: '24px',
            height: '24px',
            alignSelf: 'flex-end',
            position: 'relative',
            bottom: '8px',
            marginRight: '16px'
        }} />
        <TextField
            disabled
            label={label}
            defaultValue={text}
            InputProps={{ fullWidth: true, style: { color: verde ? '#0f0' : '#000' } }}
            style={{ width: '100%' }}
        />





    </div>
);