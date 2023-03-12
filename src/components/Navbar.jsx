import reactLogo from '../assets/react.svg'

function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <img src={reactLogo} className="nav__logo-icon" alt="React logo" />
                <h2 className="nav__logo-text">ReactFacts</h2>
            </div>
            <h3 className="nav__title">React Course - Project 1</h3>
        </nav>
    )
}

export default Navbar