import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
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
          <TextField 
            hintText="e.g., Meditate, Work Out"
            floatingLabelText="Enter your goal"
            onChange={handleChange('goal')}
            defaultValue={values.goal}
          />
          <br/>
          <TextField 
            hintText="e.g., meditated, worked out, etc)"
            floatingLabelText="Enter your past tense verb"
            onChange={handleChange('verb')}
            defaultValue={values.verb}
          />
          <br/>
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
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormStake;