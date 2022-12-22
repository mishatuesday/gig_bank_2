import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Contact from './Contact'
import AddContact from './AddContact'

const showGigUrl="http://localhost:3000/gigs/"

function ShowGig() {
    const id = useParams()
    const [thisGig, setThisGig] = useState({})
    const [showAdd, setShowAdd] = useState(false)

    
    useEffect(() => {
    fetch(`${showGigUrl}${id["id"]}`)
    .then(res => res.json())
    .then(setThisGig)
    }, [])

    return (
        <div className="content-panel">
            <div>
                {thisGig.date} @ {thisGig.service_time}<br />
                {thisGig.venue ? 
                `${thisGig.venue.city}, ${thisGig.venue.state}`
                : null}
            </div>
            {thisGig.contacts ?
            thisGig.contacts.map(contact => <Contact key={contact.id} contact={contact} />)
            : null}
            <div>
                <a href="#" onClick={() => setShowAdd(true)}>add contact</a>
                <AddContact gig_id={thisGig.id} client_id={thisGig.client_id} showAdd={showAdd} setShowAdd={setShowAdd} />
            </div>
        </div>
        )
}

export default ShowGig