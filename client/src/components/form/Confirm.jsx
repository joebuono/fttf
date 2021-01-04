import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
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
    const { firstName, lastName, email, occupation, city, bio } = this.props.values;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
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
              primaryText="Occupation"
              secondaryText={occupation}
            />
            <ListItem 
              primaryText="City"
              secondaryText={city}
            />
            <ListItem 
              primaryText="Bio"
              secondaryText={bio}
            />        
          </List>
          <br/>
          <RaisedButton 
            label="Confirm & Continue"
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

export default FormPersonalDetails;