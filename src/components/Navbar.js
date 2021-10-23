import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false)
        } else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        My Website
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/coding' className='nav-links' onClick={closeMobileMenu}>
                                Bio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/art-portfolio' className='nav-links' onClick={closeMobileMenu}>
                                Art Portfolio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-me' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}
                </div>
            </nav>

        </>
    );
}

export default Navbar; 


