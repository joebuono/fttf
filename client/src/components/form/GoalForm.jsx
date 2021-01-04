import React, { Component } from 'react';
import FormBasicInfo from './FormBasicInfo.jsx';
import FormGoalVerb from './FormGoalVerb.jsx';
import FormWhen from './FormWhen.jsx';
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
      goal: '', 
      verb: '', 
      frequency: '',
      duration: '',
      startDate: ''
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
    const { firstName, lastName, email, goal, verb, frequency, duration, startDate } = this.state;
    const values = { firstName, lastName, email, goal, verb, frequency, duration, startDate };
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
          <FormGoalVerb 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <FormWhen 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )        
      case 4:
        return (
          <Confirm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 5:
        return <Success />
    }
  }
}

export default GoalForm;