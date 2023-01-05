import { useState } from 'react'
import AddVenue from './AddVenue'

function VenueForm({venue, setVenue}) {
    const [showAddVenue, setShowAddVenue] = useState(false)

    return (
        <>
        {
            venue.id > 0 ?
            <div>
                <div className="form-title">
                venue
                </div>
                {venue.name}<br />
                {venue.street}<br />
                {venue.city}, {venue.state} {venue.zip_code}<br />
                {venue.email} {venue.phone}<br />
                <button onClick={() => setVenue({})}>remove venue</button>
            </div>
            :
            <div>
                {/* <hr />
                <label for="venue-search">Venue search</label>
                <input name="venue-search" id="venue-search"></input> or <a href="">Add New</a>
                <hr /> */}
                {
                    showAddVenue ?
                    <AddVenue setShowAddVenue={setShowAddVenue} setVenue={setVenue} />
                    :
                    <button onClick={() => setShowAddVenue(true)}>Add Venue</button>
                }
            </div>
        }
        <hr />
        </>
    )
}

export default VenueForm