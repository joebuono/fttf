import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
import SpottersList from './SpottersList.jsx';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.continue = this.continue.bind(this);
    this.back = this.back.bind(this);
  }

  continue(e) {
    e.preventDefault();
    // PROCESS FORM (send data to your Express API)
    this.props.nextStep();
  }

  back(e) {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { firstName, lastName, email, goal, verb, frequency, duration, startDate, spotters, stake } = this.props.values;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Your Goal" />
          <List>
            <ListItem 
              primaryText="First Name"
              secondaryText={firstName}
            />
            <ListItem 
              primaryText="Last Name"
              secondaryText={lastName}
            />
            <ListItem 
              primaryText="Email"
              secondaryText={email}
            />
            <ListItem 
              primaryText="Goal"
              secondaryText={goal}
            />  
            <ListItem 
              primaryText="Frequency"
              secondaryText={`${frequency} days per week`}
            />  
            <ListItem 
              primaryText="Duration"
              secondaryText={`${duration} weeks`}
            />  
             <ListItem 
              primaryText="Start Date"
              secondaryText={startDate}
            />
            <ListItem 
              primaryText="Spotters:"
            />                                    
          </List>
          <SpottersList spotters={spotters} />     
          <br/>
          <RaisedButton 
            label="HOLD MY FEET TO THE FIRE!"
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

export default Confirm;