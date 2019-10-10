import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button, TextField, AppBar, Typography, Box, CircularProgress } from "@material-ui/core";

import { SearchRounded } from '@material-ui/icons';


type WelcomeProps = {
  onCPFReady: (cpf: string) => void;
  openQRReader: () => void;
  isLoadingData?: boolean;
  cpfErrorText?: string
};

export const Welcome = ({
  onCPFReady,
  openQRReader,
  isLoadingData = false,
  cpfErrorText
}: WelcomeProps) => (
    <div>
      <div style={{
        display: 'flex',
        width: '100%',
        alignItems: 'flex-end'
        , position: 'relative' 
      }}>
        <TextField
          id="standard-name"
          label="CPF"
          margin="normal"
          InputProps={{ fullWidth: true }}
          style={{ width: '100%'}}
          error={!!cpfErrorText} 
          helperText={cpfErrorText}
          onChange={evt => {
            if (evt.target.value.length < 11) {
              return;
            }
            onCPFReady(evt.target.value);
          }}
        />
        {!isLoadingData && (
          <SearchRounded
            style={{
              marginLeft: '16px',
              position: 'relative',
              bottom: '8px'
            }}
          />
        )}
        {
          isLoadingData && (
            <CircularProgress size={24} style={{
              marginLeft: '16px',
              position: 'relative',
              bottom: '8px'
            }} />
          )
        }
      </div>
    </div>
  );