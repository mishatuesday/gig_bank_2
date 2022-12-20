import {useState, useEffect} from 'react'
import Gig from './Gig'


function GigCalendar({loggedIn}) {
    const gigsUrl = 'http://localhost:3000/my_gigs/'
    const [gigs, setGigs] = useState([])

    useEffect(() => {
        fetch(`${gigsUrl}${localStorage.id}`)
        .then(resp => resp.json())
        .then(setGigs)
    }, [])


    return (
        <div className="gigGrid">
            <h1>Gig Calendar</h1>
            <table>
                <tbody>
                {gigs.length > 0 ? gigs.map(gig => <Gig key={gig.id} gig={gig} />) : null}
                </tbody>
            </table>
        </div>
        )
}

export default GigCalendar