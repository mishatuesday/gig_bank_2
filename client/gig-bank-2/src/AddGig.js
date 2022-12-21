import GigForm from './GigForm'
import VenueForm from './VenueForm'
import { useState } from 'react'

function AddGig() {
    const [client, setClient] = useState({})
    const [venue, setVenue] = useState({})

    return (
        <div className="content-panel">
            <h1>Gig Details</h1>
            <p>client form</p>
            <VenueForm venue={venue} setVenue={setVenue} />
            <GigForm client_id={client.id} venue_id={venue.id} />
        </div>
    )
}

export default AddGig