import GigForm from './GigForm'
import VenueForm from './VenueForm'
import ClientForm from './ClientForm'
import { useState } from 'react'

function AddGig({client, setClient}) {
    
    const [venue, setVenue] = useState({})

    return (
        <div className="content-panel">
            <h1>Gig Details</h1>
            <ClientForm client={client} setClient={setClient} className={"modal"} />
            <VenueForm venue={venue} setVenue={setVenue} />
            <GigForm client_id={client.id} setClient={setClient} venue_id={venue.id} />
        </div>
    )
}

export default AddGig