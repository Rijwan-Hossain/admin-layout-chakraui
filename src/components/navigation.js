import React from 'react'; 
import { List, ListItem } from "@chakra-ui/react"; 
import { AtSignIcon, MoonIcon, StarIcon, CalendarIcon } from '@chakra-ui/icons'; 
import { NavLink } from 'react-router-dom'; 
import './nav.css'; 


function Navigation({navList, handleNavState}) { 
    const navbarOffInMobileViewHandler = () => {
        if(window.innerWidth <= 600) {
            handleNavState()
        }
    }
    return ( 
        <> 
            <List className={`navigation ${navList ? 'active' : ''}`} bg="#2D3748" color="#E2E8F0"> 
                <ListItem className="menuItem"> 
                    <NavLink to="/" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <AtSignIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Home 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/about" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <MoonIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            About 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/contact" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <StarIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Contact 
                        </span> 
                    </NavLink> 
                </ListItem> 
                
                <ListItem className="menuItem"> 
                    <NavLink to="/product" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <AtSignIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Product 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/order" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <MoonIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Order  
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/users" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <StarIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Users 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/customers" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <AtSignIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Customers 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/employees" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <MoonIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Employees 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/blog" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <StarIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Blog 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/help" onClick={navbarOffInMobileViewHandler}> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <AtSignIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Help 
                        </span> 
                    </NavLink> 
                </ListItem> 
            </List> 
        </> 
    ) 
} 

export default Navigation;