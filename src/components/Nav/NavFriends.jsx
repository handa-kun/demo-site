import './Nav.css';

const NavFriends = (props) => {

    return (
        <div>
            <div>
                <a href="https:hexlet.io">
                <img 
                src="https://www.uchportal.ru/_si/0/60762899.png" alt="logo" />
                <span>{props.name}</span>
                </a>
            </div>
        </div>
    )
}

export default NavFriends;