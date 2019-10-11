import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormHelperText } from '@material-ui/core';

import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");


export const DateComponent = () => {
    const [selectedDate, setSelectedDate] = React.useState(moment('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Data"
                    format="dd/MMMM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <FormHelperText style={{marginTop: "2px"}}>Em 15 dias</FormHelperText>
        </MuiPickersUtilsProvider>
    )
}