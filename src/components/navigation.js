import React from 'react'; 
import { List, ListItem } from "@chakra-ui/react"; 
import { AtSignIcon, MoonIcon, StarIcon, CalendarIcon } from '@chakra-ui/icons'; 
import { NavLink } from 'react-router-dom'; 
import './nav.css'; 


function Navigation({navList}) { 
    return ( 
        <> 
            <List className={`navigation ${navList ? 'active' : ''}`} bg="#2D3748" color="#E2E8F0"> 
                <ListItem className="menuItem"> 
                    <NavLink to="/"> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <AtSignIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Home 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/about"> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <MoonIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            About 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/contact"> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <StarIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Contact 
                        </span> 
                    </NavLink> 
                </ListItem> 
                
                <ListItem className="menuItem"> 
                    <NavLink to="/product"> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <AtSignIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Product 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/order"> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <MoonIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Order  
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/users"> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <StarIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Users 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/customers"> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <AtSignIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Customers 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/employees"> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <MoonIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Employees 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/blog"> 
                        <span className="icon" style={{marginTop: '-3px'}}> 
                            <StarIcon w={5} h={5} /> 
                        </span> 
                        <span className="title"> 
                            Blog 
                        </span> 
                    </NavLink> 
                </ListItem> 

                <ListItem className="menuItem"> 
                    <NavLink to="/help"> 
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