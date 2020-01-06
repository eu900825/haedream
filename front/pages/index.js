import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Loans from '../components/Loans';
import Footer from '../components/Footer';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'

const Home = () => {
    return (
        <>        
        <Header />        
        <Banner />
        <Content />
        <Loans />
        <Footer/>
        </>
    )
}

export default Home;