import { useNavigate } from "react-router-dom";

function ClientList() {
    const navigate = useNavigate()

    return (<div className="content-panel">
        <h1>Client List!</h1>
        <button onClick={() => navigate("/add-client")}>Add New Client</button>
        </div>)
}

export default ClientList