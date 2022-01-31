import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/Logo.svg';

const navbarStyle = {
  backgroundColor: '#fefefe',
};
const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '11rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
