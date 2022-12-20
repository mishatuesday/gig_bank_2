import {NavLink} from 'react-router-dom'
import { Header } from 'semantic-ui-react'


function NavHeader () {
    return (
        <div className='header-align'>
        <div>
        <Header textAlign='center' as='h2'>
        <Header.Content >
            GigBank 2.0
            <Header.Subheader>Track Gigs and Make Bank</Header.Subheader>
        </Header.Content>
        </Header>

            {/* conditional start here */}
            {localStorage.email ?
            <>
            <NavLink className="menu-item" to={`/calendar`}>
            Calendar
            </NavLink>
            <NavLink className="menu-item" to={`/to-do`}>
            To&nbsp;Do
            </NavLink> 
            
            <NavLink className="menu-item" to={`/add-gig`}>
            Add&nbsp;Gig
            </NavLink>
            <NavLink className="menu-item" to={`/add-client`}>
            Add&nbsp;Client
            </NavLink>
            {/* <NavLink className="menu-item" to={`/invoices`}>
            Invoices
            </NavLink> */}
            </>
            :null}
            </div>
        </div>
    )
}

export default NavHeader

