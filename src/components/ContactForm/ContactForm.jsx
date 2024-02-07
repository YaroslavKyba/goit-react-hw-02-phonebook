import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onAddContact(this.state);

    // const nameInput = event.currentTarget.elements.name.value;
    // const numberInput = event.currentTarget.elements.number.value;
    // event.currentTarget.reset();
    this.handleReset();
  };

  handleReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Dzek Horobets"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            placeholder="245-34-45"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export { ContactForm };
