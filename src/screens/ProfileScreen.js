import React from 'react'
import './profileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__Info'>
                    <img src='./assets/avatar.png' alt='avatar' />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen__plans'>
                            <h3>Plans</h3>
                            <img src='./assets/under_construction.jpg' alt='under construction' className='construction' />
                            <button className='profileScreen__signOut'
                                onClick={() => auth.signOut()}
                            >Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen