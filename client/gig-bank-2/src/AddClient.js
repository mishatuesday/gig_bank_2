import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddClient({setShowAddClient, setClient, className, standAlone}) {
    const navigate = useNavigate()
    const clientUrl = "http://localhost:3000/clients"
    const [clientFormData, setClientFormData] = useState([])

    function submitClient() {
        const newClient = {...clientFormData, user_id: localStorage.id}
        fetch(clientUrl,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newClient)
            }
        )
        .then(res => res.json())
        .then(setClient)
        
        
        if (standAlone) {
            navigate("/clients")
        } else {
            setShowAddClient(false)
        }
    }

    let modalClass = "none"
    if (className === "modal") {
        modalClass = "modal-content"
    }

    return (
        <div className={className}>
            <div className={modalClass}>
                <div className="form-title">add client:</div>
                
                <label>First Name:</label>
                <input type="text" name="first_name" id="first_name" className="half" value={clientFormData["first_name"]} onChange={(e) => setClientFormData({...clientFormData, first_name: e.target.value})}></input><br />
                {/* <label>First Name: </label>
                <input type="text" name="first_name" id="first_name" className="half" value={clientFormData["first_name"]} onChange={(e) => setClientFormData({...clientFormData, first_name: e.target.value})} ></input><br /> */}
                <label>Last Name: </label>
                <input type="text" name="last_name" id="last_name" className="half" value={clientFormData["last_name"]} onChange={(e) => setClientFormData({...clientFormData, last_name: e.target.value})} ></input><br />
                <label>Company: </label>
                <input type="text" name="company" id="company" className="half" value={clientFormData["company"]} onChange={(e) => setClientFormData({...clientFormData, company: e.target.value})} ></input><br />
                <label>Email: </label>
                <input type="text" name="email" id="email" className="half" value={clientFormData["email"]} onChange={(e) => setClientFormData({...clientFormData, email: e.target.value})} ></input><br />
                <label>Phone: </label>
                <input type="text" name="phone" id="phone" className="half" value={clientFormData["phone"]} onChange={(e) => setClientFormData({...clientFormData, phone: e.target.value})} ></input><br />
                {/* <label>Phone: </label>
                <input type="text" name="phone" id="phone" className="half" value={clientFormData["phone"]} onChange={(e) => setClientFormData({...clientFormData, phone: e.target.value})} ></input><br /> */}
                <label>Notes: </label>
                <input type="textarea" name="notes" id="notes" className="half" value={clientFormData["notes"]} onChange={(e) => setClientFormData({...clientFormData, notes: e.target.value})} ></input><br />
                <button onClick={() => submitClient()}>Save Client</button>
                {standAlone ? null : <button onClick={() => setShowAddClient(false)}>cancel</button>}
                
            </div>
        </div>
    )
}

export default AddClient