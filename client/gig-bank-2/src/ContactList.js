import {useState, useEffect} from 'react'
import Contact from './Contact'


function ContactList({loggedIn}) {
    const contactsUrl = 'http://localhost:3000/contacts'
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch(`${contactsUrl}`)
        .then(resp => resp.json())
        .then(setContacts)
    }, [])


    return (
        <div className="gigGrid">
            <h1>Client Interactions</h1>
            <table>
                <tbody>
                {contacts.length > 0 ? contacts.map(contact => <Contact key={contact.id} contact={contact} />) : "loading..."}
                </tbody>
            </table>
        </div>
        )
}

export default ContactList