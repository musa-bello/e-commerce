import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/Logo.svg'
import './style.scss'

export const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'> Shop </Link>
                <Link className='option' to='/Contact'> Contact </Link>
            </div>
            
        </div>
    )
}
