import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'

const NavBar = () => {
    return <nav className = {s.wholeNavBar}>
        <div></div>
       
        <NavLink activeClassName = {s.active} className = {s.navLink} to='/list'>
            <div>Announcement List</div>
        </NavLink>
        <NavLink activeClassName = {s.active} className = {s.navLink} to='/newAnnouncement'>
            <div>Add announcement</div> 
        </NavLink> 
        <NavLink activeClassName = {s.active} className = {s.navLink} to='/search'>
            <div> Search </div>
        </NavLink>
        <div></div>
    </nav>
}

export default NavBar