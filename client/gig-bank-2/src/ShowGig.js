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

    console.log(thisGig.client)

    return (
        <div className="content-panel">
            <div className="workorder-title">
                {thisGig.date} @ {thisGig.service_time}<br />
                {thisGig.occasion} in {}
                {thisGig.venue ? 
                `${thisGig.venue.city}, ${thisGig.venue.state}`
                : <span>needs venue</span>}
                </div>
                <div>
                <br />client:<br />
                {thisGig.client.first_name} {thisGig.client.last_name} {thisGig.client.phone}
                </div>
                <div>
                <br />venue:<br />
                {thisGig.venue.name}<br />
                {thisGig.venue.street}<br />
                {thisGig.venue.city}, {thisGig.venue.state} {thisGig.venue.zip_code}<br />
                {thisGig.venue.phone}
                </div>
                <div>
                    Setup Time: {thisGig.setup_time}<br />
                    Service Time: {thisGig.service_time}
                </div>
                <div>
                    Service Notes:<br />
                    {thisGig.services}
                </div>
                <div className="form-title">
                    contacts with client:
                </div>
                <div>
                    {thisGig.contacts ?
                    thisGig.contacts.map(contact => <Contact key={contact.id} contact={contact} />)
                    : null}
                </div>
                <div>
                    <a href="#" onClick={() => setShowAdd(true)}>add contact</a>
                    <AddContact gig_id={thisGig.id} client_id={thisGig.client_id} showAdd={showAdd} setShowAdd={setShowAdd} />
                </div>
            </div>
            )
}

export default ShowGig