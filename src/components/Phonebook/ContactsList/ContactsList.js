import s from './ContactsList.module.css'

 export default function ContactsList ({contacts, onDeleteContact}) {
    
        return (
            <ul className={s.contactList} >
                {contacts.map(({ id, name, number }) => (
                    <li className={s.contactItem} key={id}>
                        {name} {number} 
                        <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )
    
}

