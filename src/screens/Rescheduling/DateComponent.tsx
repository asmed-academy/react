import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormHelperText } from '@material-ui/core';
import { mockAppointments } from '../../stories/Rescheduling.stories'

import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");


export const DateComponent = () => {

    const handleDateChange = () => {  };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Data"
                value={moment(mockAppointments.date).format("YYYY/MM/DD")}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            <FormHelperText style={{ marginTop: "2px" }}>Em 15 dias</FormHelperText>
        </MuiPickersUtilsProvider>
    )
}