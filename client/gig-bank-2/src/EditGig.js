import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const gigUrl = 'http://localhost:3000/gigs/'

function EditGig() {
    const [editGigFormData, setEditGigFormData] = useState([])
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`${gigUrl}${id}`)
        .then(res => res.json())
        .then(setEditGigFormData)
    }, [])


    function updateGig() {
        console.log("hi from updateGig()")
    }

    return (<div className="content-panel">
                <label>Event Date:</label>
                <input type="text" name="date" id="date" value={editGigFormData.date}></input><br />
                <DatePicker dateFormat="YYYY-MM-DD" selected={editGigFormData["date"]} onChange={(date) => setEditGigFormData({...editGigFormData, date: date})} />
                <label>Occasion: </label>
                <input type="text" name="occasion" id="occasion" value={editGigFormData["occasion"]} onChange={(e) => setEditGigFormData({...editGigFormData, occasion: e.target.value})} ></input><br />
                <label>Setup Time: </label>
                <input type="text" name="setup_time" id="setup_time" className="half" value={editGigFormData["setup_time"]} onChange={(e) => setEditGigFormData({...editGigFormData, setup_time: e.target.value})} ></input><br />
                <label>Gig Start Time: </label>
                <input type="text" name="service_time" id="service_time" className="half" value={editGigFormData["service_time"]} onChange={(e) => setEditGigFormData({...editGigFormData, service_time: e.target.value})} ></input><br />
                <label>Service Notes: </label><br />
                <textarea cols="60" rows="4" name="services" id="gig-notes" value={editGigFormData["services"]} onChange={(e) => setEditGigFormData({...editGigFormData, services: e.target.value})} ></textarea><hr />
                <button onClick={() => updateGig()}>Update Gig</button> 
            </div>
    )
}

export default EditGig