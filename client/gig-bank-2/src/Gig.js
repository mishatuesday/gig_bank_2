import { NavLink, useNavigate } from 'react-router-dom'

function Gig ({ gig }) {
    const navigate = useNavigate()
    const day = gig.date.substr(8,2)
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG',
        'SEP', 'OCT', 'NOV', 'DEC']
    const monthName = months[gig.date.substr(5,2)-1]
    const divClass = gig.deposit_paid > 0 ? "confirmed" : "unconfirmed"

    return (
                <tr className="gig-row">
                    <td className="calendar" width="10%" onClick={() => navigate(`/gig/${gig.id}`)}><span className="month">{monthName}</span><br />
                    <span className="day">{day}</span></td>
                    <td width="68%" onClick={() => navigate(`/gig/${gig.id}`)}><span className={divClass}>{gig.service_time} : {gig.venue ? gig.venue.city : "Venue"}, {gig.venue ? gig.venue.state : "TBD"}</span><br />
                        <span className={divClass}>{gig.services.slice(0,40)}{gig.services.length > 40 ? "..." : null}</span>
                    </td>
                    <td width="22%" className="edit-gig-button">
                        <NavLink to={`/edit-gig/${gig.id}`}><button className="button-36">edit</button></NavLink>
                    </td>
                </tr>
    )
}

export default Gig