import React, { Component } from 'react';
import FormBasicInfo from './FormBasicInfo.jsx';
import FormPersonalDetails from './FormPersonalDetails.jsx';
import Confirm from './Confirm.jsx';
import Success from './Success.jsx';

class GoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstName: '',
      lastName: '', 
      email: '', 
      occupation: '', 
      city: '', 
      bio: '', 
    }
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Proceed to next step
  nextStep() {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange(input) {
    const self = this;
    return function(e) {
      self.setState({
        [input]: e.target.value
      });
    }
  }

  render() {
    const {step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    switch(step) {
      case 1: 
        return (
          <FormBasicInfo 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <FormPersonalDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 4:
        return <Success />
    }
  }
}

export default GoalForm;