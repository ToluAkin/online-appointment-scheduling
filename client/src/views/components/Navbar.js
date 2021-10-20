import { useState } from "react"
import { FlexboxGrid, Nav, Navbar } from "rsuite"
import { routes } from "../../routes"
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem"

const NavbarMenu = ({ onSelect, activeKey}) => {
    const[isLogin, setIsLogin] = useState(true)

    return (
        <div>
            <Navbar appearance='subtle' className='navbar-menu px-3 px-sm-5 py-2 mb-3'>
                <FlexboxGrid justify="space-between" align='middle'>
                    <FlexboxGridItem>
                        <Navbar.Brand className='navbar-menu-logo text-uppercase p-0' href='/'>oas</Navbar.Brand>
                    </FlexboxGridItem>
                    <FlexboxGridItem className='d-flex align-items-center'>
                        {
                            isLogin
                            ?
                                <Nav onSelect='' activeKey='' justified>
                                    <Nav.Item className='navbar-menu-item me-4 p-0' eventKey='1' href={routes.SignUp}>Create Account</Nav.Item>
                                    <Nav.Item className='navbar-menu-item p-0' eventKey='2'>Login</Nav.Item>
                                </Nav>
                            :
                                <>
                                    <p className='mb-0 align-text-bottom d-none d-sm-block me-5 '>Welcome, user@gmail.com</p>
                                    <Nav onSelect='' activeKey='' justified>
                                        <Nav.Item className='navbar-menu-item p-0' eventKey='1'>Sign out</Nav.Item>
                                    </Nav>
                                </>
                        }
                    </FlexboxGridItem>
                </FlexboxGrid>
            </Navbar>
        </div>
    )
}

export default NavbarMenu