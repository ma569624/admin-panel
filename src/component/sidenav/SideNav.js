import React from 'react'
import { Card, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './nav.scss'

const SideNav = () => {
    return (

        <Card className='sidenav'>

            <Nav className="flex-column">
                <Link to={'/'}>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </Nav>
        </Card>
    )
}

export default SideNav
