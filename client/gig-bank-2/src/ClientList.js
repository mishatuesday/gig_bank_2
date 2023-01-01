import { useNavigate } from "react-router-dom";

function ClientList() {
    const navigate = useNavigate()

    return (<>
        <h1 className="content-panel">Client List!</h1>
        <button onClick={() => navigate("/add-client")}>Add New Client</button>
        </>)
}

export default ClientList