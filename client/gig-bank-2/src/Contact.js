import { NavLink, useNavigate } from 'react-router-dom'
// import { useState } from 'react'


function Contact ({ contact }) {
    // const [,updateState] = useState()
    const navigate = useNavigate()
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG',
        'SEP', 'OCT', 'NOV', 'DEC']
    let day, monthName    
    // if (contact.followup_date !== "0") {
    day = contact.date.substr(8,2)
    monthName = months[contact.date.substr(5,2)-1]
    // } else {
    //   day = contact.date.substr(8,2)
    //   monthName = months[contact.date.substr(5,2)-1] 
    // }

    function markComplete() {
        fetch(`http://localhost:3000/contacts/${contact.id}`, 
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({followup_date: "0"})
        })
        // update front end contact followup date (use map) if not id, return
    }

    return (
                <tr>
                    <td className="calendar-2"><span className="contact-month">{monthName}</span><br />
                    <span className="contact-day">{day}</span></td>
                    <td>{contact.method}</td>
                    <td className="gig-row" onClick={() => navigate(`/gig/${contact.gig_id}`)}>
                        <span>{contact.notes ? contact.notes.slice(0,40) : null}...</span>
                    </td>
                    <td>
                        {contact.followup_date == "0" ? " " : <button onClick={() => markComplete()}>mark complete</button>}
                    </td>
                    <td>
                        {contact.followup_date > "0" ? `due: ${contact.followup_date.substr(5,5)}` : null}
                    </td>
                </tr>
    )
}

export default Contact