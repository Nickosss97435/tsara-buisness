import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-dark px-sm-5">

                <Link to='/'>
                
<img src={logo} alt="store" className="navbar-brand"/>

                </Link>
                <h1 className="nav-link-title  mx-auto col-md-6 my-3 text-capitalyse" >tsata buisness</h1>
                <ul className="navbar-nav ">   
                    <li className="d-flex nav-item ">
                     <Link to="/" className="nav-link me-5">
                         galerie
                         </Link>
                         {/* <Link to="/Vetements" className="nav-link me-5">
                         Vêtement
                         </Link>
                         <Link to="/chaussures" className="nav-link me-5">
                         Chaussures
                         </Link>
                         <Link to="/maroquineries" className="nav-link me-5">
                         Maroquineries
                         </Link>
                         <Link to="/Cosmetiques" className="nav-link me-5">
                         cosmétiques
                         </Link>
                         <Link to="/bijoux" className="nav-link me-5">
                         Bijoux
                         </Link> */}
                         <Link to="/contact" className="nav-link me-5">
                         contact
                         </Link>
                    </li>
                </ul>
                <Link to='/cart' className=""> 
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        Mon Panier
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
}

`

