// Create your Header component here
const Header = () =>{
    return(
        <div className="header">
            <div className="header-logo">
                <a href="#app"><h3>Clyde Mwenda</h3></a>
            </div>
            <div className="header-container">
                <div className="nav-items"><a href="#about">About</a></div>
                <div className="nav-items"><a href="#projects">Projects</a></div>
                <div className="nav-items"><a href="#skills">Skills</a></div>
            </div>
        </div>
    )
}
export default Header;