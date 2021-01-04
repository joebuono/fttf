import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function DatePickers({handleChange}) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField 
        id="startDate"
        label="Starting Date"
        type="date"
        defaultValue="2021-01-05"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
        onChange={handleChange('startDate')}
      />
    </form>
  );
}

