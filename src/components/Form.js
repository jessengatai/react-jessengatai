import React from 'react';
import Slider from './Slider';
import TextArea from './TextArea';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      budget: 6000,
      deadline: 4,
      desc: '',
      contact: '',
      error: '',
      thinking: false,
      success: false,
    };

    this.handleBudget = this.handleBudget.bind(this);
    this.handleDeadline = this.handleDeadline.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBudget(event) {
    this.setState({budget: parseInt(event.target.value)});
  }
  handleDeadline(event) {
    this.setState({deadline: parseInt(event.target.value)});
  }
  handleDesc(event) {
    this.setState({desc: event.target.value});
  }
  handleContact(event) {
    this.setState({contact: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();

    // Do some REALLY basic input checks
    // TODO: Ideally we would show inline errors for each input and style them with red borders etc
    if (!this.state.desc) {
      this.setState({error: 'Ah.. could you tell me more about the project?'});

    } else if (!this.state.contact) {
      this.setState({error: '..and how exactly do I contact you?'});

    } else {
      // TODO: POST SOMEWHERE! Plug this into mailchimp or Netlify form handling
      // - Unti then, fake it till you make it
      this.setState({error: ''});
      this.setState({thinking: true});
      const self = this;
      setTimeout(function(){
        self.setState({success: true});
      }, 1000);
    }
  }

  budgetEmoji(level) {
    switch(level) {
      case 4000:
        return '🙂';
      case 5000:
        return '😏';
      case 6000:
        return '😉';
      case 7000:
        return '😀';
      case 8000:
        return '😁';
      case 9000:
        return '😎';
      default:
        return '🤠';
    }
  }

  render() {

    let displayBudget = (this.state.budget < 10000)
    ? 'approx $' + this.state.budget.toLocaleString('en-US')
    : '$' + this.state.budget.toLocaleString('en-US') + '+' ;

    let displayDeadline = (this.state.deadline < 8)
    ? 'in ' + this.state.deadline + ' weeks'
    : '..what deadline?';

    return (
      <div>

      {this.state.success ? (
        <div className="card p-10">
          <h4 className="font-sans font-bold text-xl mb-4">Sent!</h4>
          <p className="text-xs">Please allow me 48 hours to get back to you.</p>
        </div>

      ) : (
        <form onSubmit={this.handleSubmit}>

        <Slider
          title="Your Budget (USD)"
          name="budget"
          value={this.state.budget}
          formattedValue={displayBudget}
          emoji={this.budgetEmoji(this.state.budget)}
          onChange={this.handleBudget}
          min="4000"
          max="10000"
          step="1000"
          disabled={this.state.thinking}
        />

        <Slider
          title="Your Deadline"
          name="budget"
          value={this.state.deadline}
          formattedValue={displayDeadline}
          emoji={this.state.deadline > 7 ? '🤙' : this.state.deadline===2 ? '😅' : ' ' }
          onChange={this.handleDeadline}
          min="2"
          max="8"
          step="1"
          disabled={this.state.thinking}
        />

        <TextArea
          title="Project Description"
          name="desc"
          value={this.state.desc}
          onChange={this.handleDesc}
          rows="3"
          disabled={this.state.thinking}
          placeholder="The Who-What-Where?"
        />

        <TextArea
          title="Contact Information"
          name="contact"
          value={this.state.contact}
          onChange={this.handleContact}
          rows="2"
          disabled={this.state.thinking}
          placeholder="Name, email, skype etc."
        />

        <div className="flex flex-col">
          { this.state.error!=='' &&
            <p className="bg-red-200 text-red-800 px-3 py-2 text-sm rounded mb-3 text-center">{this.state.error}</p>
          }
          <button
            className="btn"
            type="submit"
            disabled={this.state.thinking}>
              { this.state.thinking ? 'Sending' : 'Send' }
          </button>
        </div>

        </form>
      )}

      </div>
    )
  }
}
