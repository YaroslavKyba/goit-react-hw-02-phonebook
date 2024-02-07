import { Component } from 'react';
import css from './ContactForm.module.css';

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
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <span className={css.formTitle}>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Dzek Horobets"
            value={name}
            onChange={this.handleChange}
            required
            className={css.formInput}
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.formTitle}>Number</span>
          <input
            type="tel"
            name="number"
            placeholder="245-34-45"
            value={number}
            onChange={this.handleChange}
            required
            className={css.formInput}
          />
        </label>
        <button type="submit" className={css.formBtn}>Add Contact</button>
      </form>
    );
  }
}

export { ContactForm };
