import { useNavigate } from 'react-router-dom'

function Client({client, setClient}) {
    const navigate = useNavigate()
    function createGig() {
        setClient(client)
        navigate("/add-gig")
    }

    return (<>
            <tr className="client">
                <td>
                    {client.first_name} {client.last_name}{client.company ? `, ${client.company}` : null} 
                </td>
                <td>
                    <button onClick={() => createGig()}>Create Gig</button>
                </td>
                {/* there should be a button for see all contacts, or it do that when click on div */}
            </tr>
        </>)
}

export default Client