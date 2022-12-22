import { useState } from 'react'
import AddVenue from './AddVenue'

function VenueForm({venue, setVenue}) {
    const [showAddVenue, setShowAddVenue] = useState(false)

    return (
        <>
        {
            venue.id > 0 ?
            <div>
                venue<br />
                {venue.name}<br />
                {venue.street}<br />
                {venue.city}, {venue.state} {venue.zip_code}
                {venue.email} {venue.phone}
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
                    <a href="#" onClick={() => setShowAddVenue(true)}>Add Venue</a>
                }
            </div>
        }
        <hr />
        </>
    )
//     return (
//         <>
//             <label>Venue Name: </label>
//             <input type="text" size="100" name="venue-name" id="venue-name" value={formData["venue_name"]} onChange={(e) => setformData({...gigFormData, venue_name: e.target.value})} ></input><br />
//             <label>Venue Street: </label>
//             <input type="text" size="100" name="venue-street" id="venue-street" value={gigFormData["venue_street"]} onChange={(e) => setGigFormData({...gigFormData, venue_street: e.target.value})} ></input><br />
//             <label>Venue City: </label>
//             <input type="text" size="30" name="venue-city" id="venue-city" className="half" value={gigFormData["venue_city"]} onChange={(e) => setGigFormData({...gigFormData, venue_city: e.target.value})} ></input>
//             <label>Venue State: </label>
//             <input type="text" size="4" name="venue-state" id="venue-state" className="half" value={gigFormData["venue_state"]} onChange={(e) => setGigFormData({...gigFormData, venue_state: e.target.value})} ></input>
//             <label>Venue Zip Code: </label>
//             <input type="text" size="10" name="venue-zipcode" id="venue-zipcode" className="half" value={gigFormData["venue_zipcode"]} onChange={(e) => setGigFormData({...gigFormData, venue_zipcode: e.target.value})} ></input><br />
//             <label>Venue Phone: </label>
//             <input type="text" size="30" name="venue-phone" id="venue-phone" className="half" value={gigFormData["venue_phone"]} onChange={(e) => setGigFormData({...gigFormData, venue_phone: e.target.value})} ></input><hr />
//         </>
//     )
}

export default VenueForm