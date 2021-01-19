import React from 'react';
import { 
    Box, Flex, Spacer, Center, Text, Square, 
    List, ListItem, ListIcon, UnorderedList 
} from "@chakra-ui/react"; 
import { AtSignIcon, MoonIcon, StarIcon, CalendarIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
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


        {/* { 
            navList 
            ? 
            // Icon + text
            <Box w='15%' p={4} bg="#2D3748" color="#E2E8F0"> 
                <Flex> 
                    <CalendarIcon w={8} h={8} mr={4} mt={2} ml={4} /> 
                    <Text pb={10} size="xl" className="logo"> 
                        Logo 
                    </Text> 
                </Flex> 

                <List className="list"> 
                    <NavLink to="/"> 
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <AtSignIcon w={5} h={5} mr={4} /> 
                          Home
                      </ListItem> 
                    </NavLink> 

                    <NavLink to="/about"> 
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <MoonIcon w={5} h={5} mr={4} /> 
                          About 
                      </ListItem> 
                    </NavLink> 

                    <NavLink to="/contact">
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <StarIcon w={5} h={5} mr={4} /> 
                          Contact
                      </ListItem> 
                    </NavLink> 

                    <NavLink to="/product">
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <AtSignIcon w={5} h={5} mr={4} /> 
                          Product 
                      </ListItem> 
                    </NavLink> 

                    <NavLink to="/order">
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <MoonIcon w={5} h={5} mr={4} /> 
                          Order
                      </ListItem> 
                    </NavLink> 

                    <NavLink to="/users">
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <StarIcon w={5} h={5} mr={4} /> 
                          Users
                      </ListItem> 
                    </NavLink> 

                    <NavLink to="/customers">
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <AtSignIcon w={5} h={5} mr={4} /> 
                          Customers
                      </ListItem> 
                    </NavLink> 

                    <NavLink to="/employees"> 
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <MoonIcon w={5} h={5} mr={4} /> 
                          Employees 
                      </ListItem> 
                    </NavLink> 

                    <NavLink to="/blog"> 
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <StarIcon w={5} h={5} mr={4} /> 
                          Blog 
                      </ListItem> 
                    </NavLink> 

                    <NavLink to="/help"> 
                      <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                          <AtSignIcon w={5} h={5} mr={4} /> 
                          Help 
                      </ListItem> 
                    </NavLink> 
                </List> 
            </Box> 
            :
            // only ICON
            <Box w='5%' p={4} bg="#2D3748" color="#E2E8F0"> 
                <Flex style={{paddingBottom: '45px'}}> 
                    <CalendarIcon w={8} h={8} mr={4} mt={2} ml={4} /> 
                </Flex>
                <List className="list"> 
                    <NavLink to="/"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <AtSignIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                    <NavLink to="/about"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <MoonIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                    <NavLink to="/contact"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <StarIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                    <NavLink to="/product"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <AtSignIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                    <NavLink to="/order"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <MoonIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                    <NavLink to="/users"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <StarIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                    <NavLink to="/customers"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <AtSignIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                    <NavLink to="/employees"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <MoonIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                    <NavLink to="/blog"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <StarIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                    <NavLink to="/help"> 
                    <ListItem p={2} mb={2} pl={5} className="listHoverEffect"> 
                        <AtSignIcon w={5} h={5} mr={4} /> 
                    </ListItem> 
                    </NavLink>
                </List> 
            </Box> 
        }  */} 
        </> 
    ) 
} 

export default Navigation;