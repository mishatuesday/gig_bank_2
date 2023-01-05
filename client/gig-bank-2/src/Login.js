import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login({toggleLoggedIn}) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({email: "", password: ""})

    function onLogin() {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(r => {
            if (r.email) {
                localStorage.removeItem("error")
                localStorage.email = r.email
                localStorage.id = r.id
            } else {
                localStorage.error = "invalid email/password combination"
                setTimeout(() => {
                    localStorage.removeItem("error")
                }, "5000")
            }
            setFormData({email: "", password: ""})
            toggleLoggedIn()
            if (!localStorage.error) navigate("/calendar")
        })
    }

    return(
        <div>
                <span className="error">{localStorage.error ? localStorage.error : null}</span><br />
                <input icon='users' iconPosition='left' placeholder='email' type='text' name='email' id='email' value={formData["email"]} onChange={(e) => setFormData({...formData, email: e.target.value})}></input><br />
                <input icon='lock' iconPosition='left' placeholder='password' type="password" name="password" id="password" value={formData["password"]} onChange={(e) => setFormData({...formData, password: e.target.value})}></input><br />
            <button icon labelPosition='right' onClick={() => onLogin()}>
                Login
            </button>
        </div>
    )

}

export default Login