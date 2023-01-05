import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddClient from './AddClient'

function ClientForm({client, setClient, className}) {
    const navigate = useNavigate()
    const [showAddClient, setShowAddClient] = useState(false)

    return (
        <><br />
        {
            client.id > 0 ?
            <div>
                <div className="form-title">client</div>
                {client.first_name} {client.last_name}<br />
                {client.company}<br />
                {client.phone} {client.email}&nbsp;
                <a href="#" onClick={() => setClient({})}>remove client</a>
            </div>
            :
            <>
            {/* <label for="client_search">Client search</label>
            <input name="client_search" id="client_search"></input> or <a href="">Add New</a> */}
            {
                showAddClient ?
                <AddClient setShowAddClient={setShowAddClient} setClient={setClient} className={className} />
                :
                <div><button onClick={() => setShowAddClient(true)}>Add Client</button> or <button onClick={() => navigate("/clients")} >Search Clients</button> [required]</div>
            }
            </>
        }
        <br />
        <hr />
        </>
    )
}

export default ClientForm