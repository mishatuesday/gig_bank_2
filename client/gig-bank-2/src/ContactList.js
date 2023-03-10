import {useState, useEffect} from 'react'
import Contact from './Contact'


function ContactList({loggedIn, contacts, setContacts}) {
    const contactsUrl = 'http://localhost:3000/contacts/'
    // const [contacts, setContacts] = useState([]) // moved to App

    useEffect(() => {
        fetch(`${contactsUrl}${localStorage.id}`)
        .then(resp => resp.json())
        .then(r => setContacts(r.filter(contact => contact.followup_date !== "0")))
    }, [])

    // compare function helps sort contact objects by date
    function compare(a, b) {
        if (a.followup_date < b.followup_date) return 1;
        if (b.folowup_date < a.followup_date) return -1;
        return 0;
    }

    return (
        <div className="content-panel">
            <h1>To Do</h1>
            <table>
                <tbody>
                {contacts.length > 0 ? contacts.sort(compare).map(contact => <Contact key={contact.id} contact={contact} contacts={contacts} setContacts={setContacts} />) : "this will show contacts that have followup dates assigned"}
                </tbody>
            </table>
        </div>
        )
}

export default ContactList