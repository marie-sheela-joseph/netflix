import React, { useEffect, useState } from 'react'
import './nav.css'

function Nav() {
    const [show, setShow] = useState(false);
    function transitionNavBar() {
        let res = window.scrollY > 100 ? true : false;
        setShow(res)
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`} >
            <div className='nav__content'>
                <img src='./assets/logo.png' alt='netflix logo' className='nav__logo' />
                <img src='./assets/avatar.png' alt='netflix avatar' className='nav__avatar' />
            </div>
        </div >
    )
}

export default Nav