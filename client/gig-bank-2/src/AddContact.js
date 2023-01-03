import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function AddContact({gig_id, showAdd, client_id, setShowAdd}) {
    const contactUrl="http://localhost:3000/contacts"
    const [contactFormData, setContactFormData] = useState([])

    function submitContact() {
        // if contactFormData.followup_date !== valid date, set to 0
        const newContact = {...contactFormData, gig_id: gig_id, client_id: client_id}
        fetch(contactUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newContact)
        })
        setShowAdd(false)
    }

    if (!showAdd) {
        return null
    }

    // set addContactForm.date = today

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="form-title">add contact</div>
                {/* <label>Date: </label>
                <input type="text" name="date" id="date" className="half" value={contactFormData["date"]} onChange={(e) => setContactFormData({...contactFormData, date: e.target.value})} ></input><br /> */}
                <label>Date:</label>
                <DatePicker selected={contactFormData["date"]} onChange={(date) => setContactFormData({...contactFormData, date: date})} />
                <label>Method: </label>
                <input type="text" name="method" id="method" className="half" value={contactFormData["method"]} onChange={(e) => setContactFormData({...contactFormData, method: e.target.value})} ></input><br />
                <label>Notes: </label>
                <input type="text" name="notes" id="notes" className="half" value={contactFormData["notes"]} onChange={(e) => setContactFormData({...contactFormData, notes: e.target.value})} ></input><br />
                {/* <label>Followup On: </label>
                <input type="text" placeholder="YYYY-MM-DD" name="followup_date" id="followup_date" className="half" value={contactFormData["followup_date"]} onChange={(e) => setContactFormData({...contactFormData, followup_date: e.target.value})} ></input><br /> */}
                <label>Followup On:</label>
                <DatePicker selected={contactFormData["followup_date"]} onChange={(date) => setContactFormData({...contactFormData, followup_date: date})} />
                
                <button onClick={() => submitContact()}>Save Contact</button>
                <a href="#" onClick={() => setShowAdd(false)}>cancel</a>
            </div>
        </div>

    )

}

export default AddContact