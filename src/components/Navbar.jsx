import reactLogo from '../assets/react.svg'

function Navbar() {
    return (
        <nav class="nav">
            <div className="app-name">
                <img src={reactLogo} className="nav-logo" alt="React logo" />
                <h2 className="nav-title">ReactFacts</h2>
            </div>
            <h3 className="nav-label">React Course - Project 1</h3>
        </nav>
    )
}

export default Navbar