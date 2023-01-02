import { NavLink, useNavigate } from 'react-router-dom'


function Contact ({ contact }) {
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

    return (
                <tr className="gig-row" onClick={() => navigate(`/gig/${contact.gig_id}`)}>
                    <td className="calendar-2"><span className="month">{monthName}</span><br />
                    <span className="day">{day}</span></td>
                    <td>{contact.method}</td>
                    <td>
                        <span>{contact.notes.slice(0,80)}...</span>
                    </td>
                    <td>
                        {contact.followup_date > "0" ? contact.followup_date.substr(0,10) : null}
                    </td>
                </tr>
    )
}

export default Contact