import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import {mockAppointments} from '../../stories/Rescheduling.stories'
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");


export const TimeComponent = () => {

    const handleDateChange = ( ) => {  };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Horário"
                value={moment(mockAppointments.date)}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </MuiPickersUtilsProvider>
    )
}