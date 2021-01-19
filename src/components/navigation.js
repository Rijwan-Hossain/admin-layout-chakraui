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
            <Box bg="#2D3748" color="#E2E8F0"> 
                <List className={`navigation ${navList ? 'active' : ''}`}> 
                    <ListItem> 
                        <NavLink to="/"> 
                            <span className="icon"> 
                                <AtSignIcon w={5} h={5} /> 
                            </span> 
                            <span className="title"> 
                                Sign 
                            </span> 
                        </NavLink> 
                    </ListItem> 

                    <ListItem> 
                        <NavLink to="/about"> 
                            <span className="icon"> 
                                <MoonIcon w={5} h={5} /> 
                            </span> 
                            <span className="title"> 
                                About 
                            </span> 
                        </NavLink> 
                    </ListItem> 

                    <ListItem> 
                        <NavLink to="/contact"> 
                            <span className="icon"> 
                                <StarIcon w={5} h={5} /> 
                            </span> 
                            <span className="title"> 
                                Contact 
                            </span> 
                        </NavLink> 
                    </ListItem> 
                </List> 
            </Box> 


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