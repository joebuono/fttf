import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

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
      // get server to email them
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
          <h2>{`${values.firstName} is betting $${values.stake} that he can ${values.goal} ${values.frequency} times per week for ${values.duration} weeks straight!`}</h2>
          <h3>{`These spotters are holding him accountable for reaching the goal:`}</h3>
          <ul>
            {values.spotters.map(spotter => <li>{spotter.spotterName}</li>)}
          </ul>
          <h3>Current Streak:</h3>
          {this.state.streak ? '🔥' : "Hasn't started yet..."}
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