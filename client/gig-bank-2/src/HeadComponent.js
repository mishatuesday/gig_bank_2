import NavHeader from './NavHeader'
import LoginStatus from './LoginStatus'

function HeadComponent({toggleLoggedIn}) {
    return (
        <div className="blurf">
            <NavHeader />
            <LoginStatus toggleLoggedIn={toggleLoggedIn} />
        </div>
    )
}

export default HeadComponent