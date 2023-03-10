import { useState } from 'react'
const userUrl = "http://localhost:3000/users"

function Splash() {
    const [showCreate, setShowCreate] = useState(false)
    const [userFormData, setUserFormData] = useState([])

    function submitUser() {
        fetch(userUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userFormData)
        })
        setUserFormData([])
        setShowCreate(false)
    }

    return(<>
        <div className="content-panel">
        {showCreate ?
        <div className="modal">
            <div className="modal-content">
                <div className="form-title">Create User</div>
                <label>First Name: </label>
                <input type="text" name="first_name" id="first_name" value={userFormData.first_name} onChange={(e) => setUserFormData({...userFormData, first_name: e.target.value})} ></input><br />
                <label>Last Name: </label>
                <input type="text" name="last_name" id="last_name" value={userFormData.last_name} onChange={(e) => setUserFormData({...userFormData, last_name: e.target.value})} ></input><br />
                <label>Business Name: </label>
                <input type="text" name="business_name" id="business_name" value={userFormData.business_name} onChange={(e) => setUserFormData({...userFormData, business_name: e.target.value})} ></input><br />
                <label>Email: </label>
                <input type="text" name="email" id="email" value={userFormData.email} onChange={(e) => setUserFormData({...userFormData, email: e.target.value})} ></input><br />
                <label>Password: </label>
                <input type="password" name="password" id="password" value={userFormData.password} onChange={(e) => setUserFormData({...userFormData, password: e.target.value})} ></input><br />
                <label>Confirm Password: </label>
                <input type="password" name="passwd_conf" id="passwd_conf" value={userFormData.passwd_conf} onChange={(e) => setUserFormData({...userFormData, passwd_conf: e.target.value})} ></input><br />
                <button onClick={() => submitUser()}>Sign Up!</button>
                <a href="#" onClick={() => setShowCreate(false)} >cancel</a>
            </div>
        </div>
        
        :
        <div className="splash">
            <img src={require("./assets/gigbank-splashy.png")} alt="a musician and a magician with money raining down on them" /><br />
            Welcome to GigBank! <br />
            Where freelance event entertainers keep track of gigs, leads, and client contacts.<br />Log in or <a href="#" onClick={() => setShowCreate(true)} >Sign Up!</a>
        </div>
        }
        </div>
        </>)
}

export default Splash