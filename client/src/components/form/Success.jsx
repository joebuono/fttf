import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButtonToday: false,
      streak: 0
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    if (!this.state.clickedButtonToday) {
      const { firstName, lastName, verb, stake } = this.props.values;
      // get server to email them
      axios.post('/sendemail', {
        firstName,
        lastName,
        verb,
        stake
      })
        .then(console.log)
        .catch(err => console.log(`There was an error in posting to the server, ${err}`))
      this.setState({
        streak: this.state.streak + 1,
        clickedButtonToday: true
      });
    } else {
      alert(`You already said you ${this.props.values.verb} today!`)
    }
  }

  // add a button that will add a fire emoji when you clicked "I VERBED today!"
  // You can only click on it once per day, and you can't retroactively click for previous days
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title={`${values.firstName} ${values.lastName}'s Profile Page`} />
          <h2 style={{fontFamily: "Arial"}}>{`${values.firstName} is betting $${values.stake} that he can ${values.goal} ${values.frequency} times per week for ${values.duration} weeks straight!`}</h2>
          <h3 style={{fontFamily: "Arial"}}>{`These spotters are holding ${values.firstName} accountable for reaching the goal:`}</h3>
          <ul>
            {values.spotters.map((spotter, index) => <li key={index} style={{fontFamily: "Arial"}}>{spotter.spotterName}</li>)}
          </ul>
          <h3 style={{fontFamily: "Arial"}}>Current Streak:</h3>
          {this.state.streak ? '🔥' : <p style={{fontFamily: "Arial"}}>Hasn't started yet...</p>}
          <br/>
          <RaisedButton 
            label={`I ${values.verb} today!`}
            primary={true}
            style={styles.button}
            onClick={this.handleButtonClick}
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

export default Success;