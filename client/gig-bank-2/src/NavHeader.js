import {NavLink} from 'react-router-dom'
import { Header } from 'semantic-ui-react'


function NavHeader () {
    return (
        <div className='header-align'>
        <div>
        
            GigBank 2.0
            

            {/* conditional start here */}
            {localStorage.email ?
            <>
            <NavLink className="menu-item" to={`/calendar`}>
            CALENDAR
            </NavLink>
            <NavLink className="menu-item" to={`/to-do`}>
            TO&nbsp;DO
            </NavLink> 
            
            <NavLink className="menu-item" to={`/add-gig`}>
            ADD&nbsp;GIG
            </NavLink>
            <NavLink className="menu-item" to={`/clients`}>
            CLIENTS
            </NavLink>
            {/* <NavLink className="menu-item" to={`/invoices`}>
            Invoices
        </NavLink> */}
            </>
            :
            <span><br />Track Gigs and Make Bank!</span>
            }
            </div>
        </div>
    )
}

export default NavHeader

