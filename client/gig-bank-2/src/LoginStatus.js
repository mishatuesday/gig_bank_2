
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
        
        <>
            <div className="user-email">
                logged in as <br />{localStorage.email}<br />
            <button labelPosition='right' onClick={() => logout()}>
                Logout
            </button>
            </div>
        </>
        :
        <div className="logged-in">
        <Login toggleLoggedIn={toggleLoggedIn} />
        </div>
    )
}

export default LoginStatus
