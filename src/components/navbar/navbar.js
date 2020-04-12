import React from 'react';

import s from './navbar.module.css';
import { Link } from 'react-router-dom';
import Spinner from '../spinner'
import SpinnNot from '../spinnNot'
import {Nav, Navbar, Button} from 'react-bootstrap';


const NavGar = ({isDataLoad}) => {
 

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand >
        <Link to="/">
                
              
          {
            !isDataLoad
            ?
            <Spinner 
            isDataLoad
            className="d-inline-block align-top"/>
            :
            <SpinnNot 
            isDataLoad
            className="d-inline-block align-top"/>
          }
          </Link>
        </Navbar.Brand>
        <Nav className={s.myLink}>
          <Link to="/edit" className=" nav-link">
            <Button>
              Create New Hero
            </Button>
          </Link>
        </Nav>
      </Navbar>
    </>
    
   
         
    
  );
};

export default NavGar;
