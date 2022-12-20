import {useState} from 'react'
import { Input, Button, Icon, Message } from 'semantic-ui-react'


function Login({toggleLoggedIn}) {
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
            }
            setFormData({email: "", password: ""})
            toggleLoggedIn()
        })
    }

    function logout() {
        fetch("http://localhost:3000/logout")
        .then(setFormData({email: "", password: ""}))
        localStorage.removeItem("email")
        localStorage.removeItem("id")
        toggleLoggedIn()
    }

    return(
        localStorage.email ?
        
        <div className='login-align'>
        <p>
            <Message className="logged-in" compact>
                logged in as <br />{localStorage.email}
            </Message>
        <p>
            <Button icon labelPosition='right' onClick={() => logout()}>
                Logout
                <Icon name='right arrow' />
            </Button>
        </p>
        </p>
        </div>
        :
        <div className='login-align'>
            <p>
                <b><small>{localStorage.error ? localStorage.error : null}</small></b><br />
                <Input icon='users' iconPosition='left' placeholder='Input Username...' type='text' name='email' id='email' value={formData["email"]} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </p>
            <p>
                <Input icon='lock' iconPosition='left' placeholder='Input Password...' type="password" name="password" id="password" value={formData["password"]} onChange={(e) => setFormData({...formData, password: e.target.value})} />

            </p>
            <Button icon labelPosition='right' onClick={() => onLogin()}>
                Login
                <Icon name='right arrow' />
            </Button>
        </div>
    )
}

export default Login
