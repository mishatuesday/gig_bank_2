import GigForm from './GigForm'
import VenueForm from './VenueForm'
import ClientForm from './ClientForm'
import { useState } from 'react'

function AddGig() {
    const [client, setClient] = useState({})
    const [venue, setVenue] = useState({})

    return (
        <div className="content-panel">
            <h1>Gig Details</h1>
            <ClientForm client={client} setClient={setClient} />
            <VenueForm venue={venue} setVenue={setVenue} />
            <GigForm client_id={client.id} venue_id={venue.id} />
        </div>
    )
}

export default AddGig