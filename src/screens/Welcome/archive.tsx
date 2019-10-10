import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import PropTypes from 'prop-types';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    //   backgroundColor: theme.palette.background.paper,
    },
  }));
// export default function SimpleTabs() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
  
//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     }};