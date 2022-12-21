import { NavLink } from 'react-router-dom'

function Contact ({ contact }) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG',
        'SEP', 'OCT', 'NOV', 'DEC']
    let day = contact.followup_date.substr(8,2)
    let monthName = months[contact.followup_date.substr(5,2)-1]
    if (!day) {
      day = contact.date.substr(8,2)
      monthName = months[contact.date.substr(5,2)-1] 
    }

    return (
                <tr className="gig-row">
                    <td className="calendar-2"><span className="month">{monthName}</span><br />
                    <span className="day">{day}</span></td>
                    <td>{contact.method}</td>
                    <td><span>gig date and place</span><br />
                        <span>{contact.notes.slice(0,240)}...</span>
                    </td>
                    <td>
                        {/* <NavLink to={`/contacts/add/${contact.gig_id}/${contact.client_id}`}><button className="button-36">add followup</button></NavLink> */}
                    </td>
                </tr>
    )
}

export default Contact