import {NavLink} from 'react-router-dom'
import { Header, Icon, Input, Menu, Segment } from 'semantic-ui-react'


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

            <Menu pointing>
            <NavLink to={`/`}>
            <Menu.Item
                name='Calendar'
                as='a'
                
            />
            </NavLink>
            <NavLink to={`/concessions`}>
            <Menu.Item
                    name='To Do'
                    as='a'
            />
            </NavLink> 
            {/* conditional start here */}
            {localStorage.email ?
            <>
            <NavLink to={`/newband`}>
            <Menu.Item
                    name='Add Gig'
                    as='a'
            />
            </NavLink>
            <NavLink to={`/newconcert`}>
            <Menu.Item
                    name='Add Client'
                    as='a'
            />
            </NavLink>
            <NavLink to={`/newconcession`}>
            <Menu.Item
                    name='Invoices'
                    as='a'
            />
            </NavLink>
            </>
            :null}
            </Menu>
            </div>
        </div>
    )
}

export default NavHeader

