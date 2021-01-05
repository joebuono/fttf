import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.continue = this.continue.bind(this);
  }

  continue(e) {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Feet to the Fire!" />
          <h2 style={{fontFamily: "Arial"}}>An app that uses loss aversion and fear of social shame to hold you accountable for achieving your goals</h2>
          <RaisedButton 
            label="Create New Goal"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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

export default LandingPage;