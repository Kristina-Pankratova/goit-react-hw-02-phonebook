import React, { Component } from 'react';
import AddForm from './components/Phonebook/AddForm/AddForm';
import ContactsList from './components/Phonebook/ContactsList/ContactsList';
import FilterContacts from './components/Phonebook/FilterContacts/FilterContacts';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
}

  formSubmitHandler = (data) => {
    console.log(data);

  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts!!!`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  
  changeFilter = e => {
    this.setState({filter: e.target.value});
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  
  render() {
    const { contacts, filter} = this.state;

    const normalizedContact = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <AddForm onSubmit={this.formSubmitHandler}
          onSubmits={this.addContact}/>
        <h2>Contacts</h2>
        <FilterContacts value={filter} onChange={this.changeFilter}/>
        <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
     </div>
   )
  }
  
}

export default App;
