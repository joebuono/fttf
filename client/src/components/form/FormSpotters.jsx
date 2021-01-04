import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SpottersList from './SpottersList.jsx';

class FormSpotters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotterName: '',
      spotterEmail: ''
    };
    this.continue = this.continue.bind(this);
    this.back = this.back.bind(this);
    // consolidate these methods later
    this.addSpotterName = this.addSpotterName.bind(this);
    this.addSpotterEmail = this.addSpotterEmail.bind(this);
    this.addSpotter = this.addSpotter.bind(this);
  }

  addSpotterName(e) {
    this.setState({
      spotterName: e.target.value
    });
  }

  addSpotterEmail(e) {
    this.setState({
      spotterEmail: e.target.value
    });
  }

  addSpotter() {
    const { spotterName, spotterEmail } = this.state;
    const spotter = {
      spotterName: spotterName,
      spotterEmail: spotterEmail
    };
    this.props.updateSpotters(spotter);

    this.setState({
      spotterName: '',
      spotterEmail: ''
    });
    // trigger re-render?
    this.forceUpdate();
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
    console.log('rendering spotters form', this.props.values.spotters);
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Choose your spotters" />
          <TextField 
            hintText="e.g., Spotty McGee"
            floatingLabelText="Spotter name"
            value={this.state.spotterName}
            onChange={this.addSpotterName}
          />
          <br/>
          <TextField 
            hintText="e.g., spotter@gmail.com)"
            floatingLabelText="Enter your spotter's email"
            value={this.state.spotterEmail}
            onChange={this.addSpotterEmail}
          />
          <br/>
          <RaisedButton 
            label="ADD SPOTTER"
            primary={false}
            style={styles.button}
            onClick={this.addSpotter}
          />
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
          <SpottersList spotters={values.spotters}/>
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

export default FormSpotters;