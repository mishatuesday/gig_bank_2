import { useState } from 'react'
import AddClient from './AddClient'

function ClientForm({client, setClient}) {
    const [showAddClient, setShowAddClient] = useState(false)

    return (
        <>
        {
            client.id > 0 ?
            <div>
                Anita Drake
            </div>
            :
            <>
            {/* <label for="client_search">Client search</label>
            <input name="client_search" id="client_search"></input> or <a href="">Add New</a> */}
            {
                showAddClient ?
                <AddClient setShowAddClient={setShowAddClient} setClient={setClient} />
                :
                <a href="#" onClick={() => setShowAddClient(true)}>Add Client</a>
            }
            </>
        }
        </>
    )
}

export default ClientForm