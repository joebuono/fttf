import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import RaisedButton from 'material-ui/RaisedButton';

class FormStake extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.continue = this.continue.bind(this);
    this.back = this.back.bind(this);
  }

  continue(e) {
    e.preventDefault();
    this.props.nextStep();
  }

  back(e) {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar title="Choose your stake!" />
        <br/>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-ardornment-amount">Stake</InputLabel>
            <OutlinedInput 
              id="outlined-ardornment-amount"
              value={values.stake}
              onChange={handleChange('stake')}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={60}
            />
          </FormControl>
          <RaisedButton 
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton 
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormStake;