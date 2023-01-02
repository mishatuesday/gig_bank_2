

function Client({client}) {
    return (<>
            <tr className="client">
                <td>
                    {client.first_name} {client.last_name}, {client.company} 
                </td>
                <td>
                    <button>Create Gig</button>
                </td>
                {/* there should be a button for see all contacts, or it do that when click on div */}
            </tr>
        </>)
}

export default Client