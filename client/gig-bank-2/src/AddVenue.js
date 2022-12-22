import { useState } from 'react'

function AddVenue({setShowAddVenue, setVenue}) {
    const venueUrl = "http://localhost:3000/venues"
    const [venueFormData, setVenueFormData] = useState([])

    function submitVenue() {
        fetch(venueUrl,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(venueFormData)
            }
        )
        .then(res => res.json())
        .then(setVenue)
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="form-title">add venue:</div>
                <label>Name: </label>
                <input type="text" name="name" id="name" className="half" value={venueFormData["name"]} onChange={(e) => setVenueFormData({...venueFormData, name: e.target.value})} ></input><br />
                <label>Street: </label>
                <input type="text" name="street" id="street" className="half" value={venueFormData["street"]} onChange={(e) => setVenueFormData({...venueFormData, street: e.target.value})} ></input><br />
                <label>City: </label>
                <input type="text" name="city" id="city" className="half" value={venueFormData["city"]} onChange={(e) => setVenueFormData({...venueFormData, city: e.target.value})} ></input><br />
                <label>State: </label>
                <input type="text" name="state" id="state" className="half" value={venueFormData["state"]} onChange={(e) => setVenueFormData({...venueFormData, state: e.target.value})} ></input><br />
                <label>Zip Code: </label>
                <input type="text" name="zip_code" id="zip_code" className="half" value={venueFormData["zip_code"]} onChange={(e) => setVenueFormData({...venueFormData, zip_code: e.target.value})} ></input><br />
                <label>Email: </label>
                <input type="text" name="email" id="email" className="half" value={venueFormData["email"]} onChange={(e) => setVenueFormData({...venueFormData, email: e.target.value})} ></input><br />
                <label>Phone: </label>
                <input type="text" name="phone" id="phone" className="half" value={venueFormData["phone"]} onChange={(e) => setVenueFormData({...venueFormData, phone: e.target.value})} ></input><br />        
                <button onClick={() => submitVenue()}>Save Venue</button>
                <a href="#" onClick={() => setShowAddVenue(false)}>cancel</a>
            </div>
        </div>
    )
}

export default AddVenue