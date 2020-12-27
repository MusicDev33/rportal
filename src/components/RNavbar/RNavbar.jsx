import React from 'react';
import styles from './RNavbar.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export class RNavbar extends React.Component {
  render() {
    return (
      <Container className={'px-5 pt-2'}>
        <Navbar sticky='top' className={styles.navcard}>
          <Navbar.Brand>
            <img src='/logo3/cover.png' alt='' width='180px' height='auto'/>
          </Navbar.Brand>
        </Navbar>
      </Container>
    );
  }
}
