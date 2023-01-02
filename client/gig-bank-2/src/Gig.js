import { NavLink, useNavigate } from 'react-router-dom'

function Gig ({ gig }) {
    const navigate = useNavigate()
    const day = gig.date.substr(8,2)
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG',
        'SEP', 'OCT', 'NOV', 'DEC']
    const monthName = months[gig.date.substr(5,2)-1]
    const divClass = gig.deposit_paid > 0 ? "confirmed" : "unconfirmed"

    return (
                <tr className="gig-row" onClick={() => navigate(`/gig/${gig.id}`)}>
                    <td className="calendar" width="8%"><span className="month">{monthName}</span><br />
                    <span className="day">{day}</span></td>
                    <td width="70%"><span className={divClass}>{gig.service_time} : {gig.venue ? gig.venue.city : "Venue"}, {gig.venue ? gig.venue.state : "TBD"}</span><br />
                        <span className={divClass}>{gig.services.slice(0,40)}{gig.services.length > 40 ? "..." : null}</span>
                    </td>
                    {/* <td width="22%">
                        <NavLink to={`/gig/${gig.id}`}><button className="button-36">view</button></NavLink>
                    </td> */}
                </tr>
    )
}

export default Gig