import React from 'react';
import Head from 'next/head';
import { Menu, Icon, Carousel } from 'antd';
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <>
        <Head>
            <title>대출해드림</title>
        </Head>
        <Navbar style={{backgroundColor: 'black'}} variant="dark" fixed="top" >
            <Navbar.Brand href="#home" className="ml-sm-5" style={{fontSize: 35}}>Dream</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {/*<Nav.Link href="#home" className="mr-sm-5"  style={{color: 'lightblue', fontSize: 20}}>질문과 답변</Nav.Link> */}
                <Nav.Link href="#features" className="mr-sm-0"  style={{color: 'lightblue', fontSize: 20}}>대출 문의는</Nav.Link>
                <Nav.Link href="#pricing" className="mr-sm-5"   style={{color: 'lightblue', fontSize: 20}}>010-3910-7727</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Header;