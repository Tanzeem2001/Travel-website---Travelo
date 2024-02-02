import React, {useState} from 'react'
import styled from "styled-components";
import logo from "../assets/logo.png";
import {GiHamburgerMenu} from "react-icons/gi"
import {VscChromeClose} from "react-icons/vsc"
import { Link, useNavigate  } from 'react-router-dom';
export default function Navbar() {
    const [navbarState, setNavbarState] = useState(false);

    
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
    navigate("/login");// Implement your logout logic here
    };

    
    return (
        <>
            <Nav navbarState={navbarState}>
     <div className='header'>
         <div className="brand">
            <div className="container">
                <img src={logo} alt="" />
                Travelo
            </div>
            <div className="toggle">
                {
                    navbarState ? (
                    <VscChromeClose onClick={() => setNavbarState(false)} />
                    ): (
                    <GiHamburgerMenu onClick={() => setNavbarState(true)} />
                )}
            </div>
         </div>
         <ul>
            <li>
                <Link className="link" to="/hero">Home</Link >
            </li>
            <li>
                <Link className="link" to="/services">Service</Link >
            </li>
            <li>
                <Link className="link" to="/recommend">Place</Link >
            </li>
            <li>
                <Link className="link" to="/testimonials">Testimonials</Link >
            </li>
            {localStorage.getItem("authToken") ? (
                <li>
                    <Link className="link" to="/"  onClick={handleLogout}>Logout</Link>         
                </li>
            ):(
            <li>
                <Link className="link" to="/login">Login</Link >
            </li>
            )}
         </ul>
         <button>Connect</button>
     </div>
     </Nav> 
     <ResponsiveNav state = {navbarState}>
     <ul>
            <li>
                <Link  className="link" to="/hero" onClick={() => setNavbarState(false)}>Home</Link>
            </li>
            <li>
                <Link className="link" to="/services" onClick={() => setNavbarState(false)}>Service</Link>
            </li>
            <li>
                <Link className="link" to="/recommend" onClick={() => setNavbarState(false)}>Place</Link>
            </li>
            <li>
                <Link className="link" to="/testimonials" onClick={() => setNavbarState(false)}>Testimonials</Link>
            </li>
            <li>
                <Link className="link" to="/login" onClick={() => setNavbarState(false)}>Login</Link>
            </li>
         </ul>
     </ResponsiveNav>
    </>
  )
}

const Nav = styled.nav`
    position: fixed; /* Add fixed position */
    top:0; /* Stick Navbar to the top */
    left:0;
    z-index: 1000;
    width: 100%; /* Take full width */
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: #217d8f;
    
    .brand{
        .container{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.4rem;
            font-size: 3.2rem;
            font-weight: 700;
            text-transform: uppercace;
            img{
                height: 4rem;
                width: 4rem;
            }
        }
        .toggle{
            display: none;
        }
    }
    ul{
        display: flex;
        list-style-type: none;
        gap: 5rem;
        li{ 
           .link{
                text-decoration: none;
                color: #b3d2e3;
                font-size: 1.6rem;
                transition: 0.1s ease-in-out;
                &:hover{
                    color: #18cddf;
                    font-weight: 900;
                }
            }
            &:first-of-type{
                .link{
                    color: #18cddf;
                    font-weight: 900;
                }
            }
        }
    }
    button{
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 1rem;
        border: none;
        color: white;
        background-color: #48cae4;
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        transition: 0.3s ease-in-out;
        &:hover{
            background-color: #023e8a;
        }
    }
}

    @media screen and (max-width: 768px) {
        .header {
            .brand {
              font-size: 20px;
      
              img {
                height: 30px;
                width: 30px;
              }
            }
      
            .toggle {
              display: block;
            }
      
            ul {
              display: none;
              flex-direction: column;
              position: fixed;
              top: 100px;
              left: 0;
              width: 100%;
              background-color: #217d8f;
              padding: 20px;
              z-index: 999;
            }
      
            ul.active {
              display: flex;
            }
      
            li {
              margin-bottom: 10px;
            }
          }
        }
`;

const ResponsiveNav = styled.div`
   display: flex;
   position: fixed;
   z-index: 1001;
   background-color: white;
   width: 100%;
   height: 30vh;
   align-items: center;
   transition: 0.3s ease-in-out;
   top: ${({ navbarState }) => (navbarState ? "50px" : "-400px")};
   ul {
    list-style-type: none;
    width: 100%;
    li {
        width: 100%;
        margin: 1rem 0;
        margin-left: 2rem;
        .link {
            text-decoration: none;
            color: #0077b6;
            font-size: 1.2rem;
            transition: 0.1s ease-in-out;
            &:hover {
                color: #023e8a;
            }
        }
        &:first-of-type {
            .link{
                color: #023e8a;
                font-weight: 900;
            }
        }
        
    }
   }
`;
