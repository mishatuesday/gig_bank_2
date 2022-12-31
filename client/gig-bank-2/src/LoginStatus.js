
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
        <Login toggleLoggedIn={toggleLoggedIn} />
    )
}

export default LoginStatus
