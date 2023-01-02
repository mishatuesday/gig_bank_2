import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Client from './Client'

function ClientList({setClient}) {
    const clientsUrl = 'http://localhost:3000/my_clients/'
    const [clients, setClients] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate

    useEffect(() => {
        fetch(`${clientsUrl}${localStorage.id}`)
        .then(resp => resp.json())
        .then(setClients)
    }, [])
    const showClients = clients.filter(client => client.first_name.toLowerCase().includes(search.toLowerCase()) || client.last_name.toLowerCase().includes(search.toLowerCase()))

    return (<div className="content-panel">
        <h1>Client List!</h1>
        search: <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)}></input><br />
        <button onClick={() => navigate("/add-client")}>Add New Client</button>
        <div className="form-title">
            Clients:
        </div>
        <div>
            {/* put the list of clients here */}
            <table>
                    {showClients.length > 0 ? showClients.map(client => <Client key={client.id} client={client} setClient={setClient} />) : null}
            </table>
        </div>
        </div>)
}

export default ClientList