import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Client from './Client'

function ClientList({setClient}) {
    const clientsUrl = 'http://localhost:3000/my_clients/'
    const [clients, setClients] = useState([])
    const navigate = useNavigate

    useEffect(() => {
        fetch(`${clientsUrl}${localStorage.id}`)
        .then(resp => resp.json())
        .then(setClients)
    }, [])


    return (<div className="content-panel">
        <h1>Client List!</h1>
        <button onClick={() => navigate("/add-client")}>Add New Client</button>
        <div className="form-title">
            Clients:
        </div>
        <div>
            {/* put the list of clients here */}
            <table>
                    {clients.length > 0 ? clients.map(client => <Client key={client.id} client={client} setClient={setClient} />) : null}
            </table>
        </div>
        </div>)
}

export default ClientList