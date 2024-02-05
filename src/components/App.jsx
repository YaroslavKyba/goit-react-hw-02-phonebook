import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const nameInput = event.currentTarget.elements.name.value;
    const numberInput = event.currentTarget.elements.number.value;
    console.log(nameInput, numberInput);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    // const { id, name, number } = this.state.contacts;
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Dzek Horobets"
              required
            />
          </label>
          <label>
            <span>Number</span>
            <input type="tel" name="number" placeholder="245-34-45" required />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          ondeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
