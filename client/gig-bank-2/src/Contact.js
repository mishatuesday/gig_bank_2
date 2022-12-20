import { NavLink } from 'react-router-dom'

function Contact ({ contact }) {
    
    const day = contact.date.substr(8,2)
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG',
        'SEP', 'OCT', 'NOV', 'DEC']
    const monthName = months[contact.date.substr(5,2)-1]


    return (
                <tr className="gig-row">
                    <td className="calendar-2" width="10%"><span className="month">{monthName}</span><br />
                    <span className="day">{day}</span></td>
                    <td width="10%">{contact.method}</td>
                    <td width="60%"><span>Gig on: {contact.gig.date.substr(5,5)} @ {contact.time}</span><br />
                        <span>{contact.notes.slice(0,240)}...</span>
                    </td>
                    <td width="20%">
                        <NavLink to={`/contacts/add/${contact.gig_id}/${contact.client_id}`}><button className="button-36">add followup</button></NavLink>
                    </td>
                </tr>
    )
}

export default Contact