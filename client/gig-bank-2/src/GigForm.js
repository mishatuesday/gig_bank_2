import { useEffect, useState } from "react"

function GigForm ({client_id, venue_id}) {

    const [formData, setFormData] = useState([])

    return (
            <>
            <label>Event Date: </label>
            <input type="text" placeholder="YYYY-MM-DD" name="date" id="date" className="half" value={formData["date"]} onChange={(e) => setFormData({...formData, date: e.target.value})} ></input><br />
            <label>Occasion: </label>
            <input type="text" name="occasion" id="occasion" value={formData["occasion"]} onChange={(e) => setFormData({...formData, occasion: e.target.value})} ></input><br />
            <label>Setup Time: </label>
            <input type="text" name="setup_time" id="setup_time" className="half" value={formData["setup_time"]} onChange={(e) => setFormData({...formData, setup_time: e.target.value})} ></input><br />
            <label>Gig Start Time: </label>
            <input type="text" name="service_time" id="service_time" className="half" value={formData["service_time"]} onChange={(e) => setFormData({...formData, service_time: e.target.value})} ></input><br />
            {/* <label>Gig Duration (minutes): </label>
            <input type="text" name="gig-duration" id="gig-duration" className="half" value={gigFormData["gig_duration"]} onChange={(e) => setGigFormData({...gigFormData, gig_duration: e.target.value})} ></input><hr /> */}
            <label>Service Notes: </label><br />
            <textarea cols="60" rows="4" name="services" id="gig-notes" value={formData["services"]} onChange={(e) => setFormData({...formData, services: e.target.value})} ></textarea><hr />
            {/* <label>Price Quoted: </label>
            <input type="text" size="30" name="price-quoted" id="price-quoted" className="half" value={gigFormData["price_quoted"]} onChange={(e) => setGigFormData({...gigFormData, price_quoted: e.target.value})} ></input>
            <label>Deposit Paid: </label>
            <input type="text" size="30" name="deposit-paid" id="deposit-paid" className="half" value={gigFormData["deposit_paid"]} onChange={(e) => setGigFormData({...gigFormData, deposit_paid: e.target.value})} ></input><br />
            <label>Balance Paid: </label>
            <input type="text" size="30" name="balance-paid" id="balance-paid" className="half" value={gigFormData["balance_paid"]} onChange={(e) => setGigFormData({...gigFormData, balance_paid: e.target.value})} ></input><br />
            <span id={status}>unsaved changes</span>
            <input type="submit" value="Save Gig" className="button-save"></input> */}
            </>
    )
}

export default GigForm