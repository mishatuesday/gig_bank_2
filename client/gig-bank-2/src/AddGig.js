import GigForm from './GigForm'
import VenueForm from './VenueForm'
import ClientForm from './ClientForm'
import { useState } from 'react'

function AddGig({client, setClient}) {
    
    const [venue, setVenue] = useState({})

    return (
        <div className="content-panel">
            <h3>ADD A NEW GIG</h3>
            <div className="form-title">Client info:</div>
            <ClientForm client={client} setClient={setClient} className={"modal"} />
            <div className="form-title">Venue info:</div>
            <VenueForm venue={venue} setVenue={setVenue} />
            <div className="form-title">Gig details:</div>
            <GigForm client_id={client.id} setClient={setClient} venue_id={venue.id} />
        </div>
    )
}

export default AddGig