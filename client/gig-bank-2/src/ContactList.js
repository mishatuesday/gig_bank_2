import {useState, useEffect} from 'react'
import Contact from './Contact'


function ContactList({loggedIn}) {
    const contactsUrl = 'http://localhost:3000/contacts/'
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch(`${contactsUrl}${localStorage.id}`)
        .then(resp => resp.json())
        .then(setContacts)
    }, [])

    // compare function helps sort contact objects by date
    function compare(a, b) {
        if (a.followup_date > b.followup_date) return 1;
        if (b.folowup_date > a.followup_date) return -1;
        return 0;
    }

    return (
        <div className="content-panel">
            <h1>To Do</h1>
            <table>
                <tbody>
                {contacts.length > 0 ? contacts.sort(compare).map(contact => <Contact key={contact.id} contact={contact} />) : "loading..."}
                </tbody>
            </table>
        </div>
        )
}

export default ContactList