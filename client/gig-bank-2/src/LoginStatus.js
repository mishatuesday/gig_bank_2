
import { Button, Icon, Message } from 'semantic-ui-react'
import Login from './Login'
import { useNavigate } from "react-router-dom";

function LoginStatus({toggleLoggedIn}) {
    const navigate = useNavigate();

    function logout() {
        fetch("http://localhost:3000/logout")
        localStorage.removeItem("email")
        localStorage.removeItem("id")
        toggleLoggedIn()
        navigate("/")
    }

    return(
        localStorage.email ?
        
        <div className="login-align">
            <Message compact>
                logged in as <br />{localStorage.email}
            </Message>
            <Button icon labelPosition='right' onClick={() => logout()}>
                Logout
            </Button>
        </div>
        :
        <div className="logged-in">
        <Login toggleLoggedIn={toggleLoggedIn} />
        </div>
    )
}

export default LoginStatus
