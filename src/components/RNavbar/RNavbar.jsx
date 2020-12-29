import React from 'react';
import styles from './RNavbar.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export class RNavbar extends React.Component {
  render() {
    return (
      <Container className={'px-5 pt-2 mb-3'}>
        <Navbar sticky='top' className={'r-card px-4 py-2'}>
          <Navbar.Brand>
            <img src='/logo3/cover.png' alt='' width='180px' height='auto'/>
          </Navbar.Brand>
          <Nav className='ml-auto'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>Utilities</Link>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
