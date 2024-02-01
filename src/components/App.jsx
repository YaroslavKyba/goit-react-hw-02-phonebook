import { Component } from 'react';

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

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <label>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>
        <label>
          <span>Number</span>
          <input type="tel" name="number" required />
        </label>
        <button type="submit">Add Contact</button>

        <ul>Contacts</ul>
        <li name="Rozie" id="dsf">
          Rozie
        </li>
      </div>
    );
  }
}
