import Logo from "./Logo"
import Button from "./Button"

const DesktopNav = () => {
    const buttonStyle = {
        "fontSize": "0.9rem"
    }


    return (
        <>
            <Logo />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#works">Our Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Button value="Work with us!" style={buttonStyle} /></li>
                </ul>
            </nav>
        </>
    )
}

export default DesktopNav