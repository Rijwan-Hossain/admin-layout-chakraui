import React from 'react'; 
import {
    Box, Flex, List, ListItem
} from '@chakra-ui/react'

import { Icon, HamburgerIcon } from '@chakra-ui/icons'
import { AiOutlineDesktop, AiOutlineTablet, AiOutlineClose } from "react-icons/ai"

function Header({handleNavState, navList}) { 
    return ( 
        <Box bg="#f8f8f8" h="60px" style={{borderBottom: '2px solid #2D3748'}}> 
            <Flex pt={3} justifyContent="space-between"> 
                <List> 
                    <Flex > 
                        <ListItem ml={30} w="20px">A</ListItem> 
                        <ListItem w="20px">B</ListItem> 
                    </Flex> 
                </List> 


                {/* Icons */} 
                {/* Desktop mode ---> icons: tab, -- icon + title:desktop */} 
                {/* Tab or mobile mode ---> icons: burger, --> icon + title: close */} 
                { 
                    window.innerWidth > 991 
                    ? 
                        navList 
                        ? 
                            <Icon w={8} h={8} mr={15} as={AiOutlineTablet} onClick={handleNavState} style={{cursor: 'pointer'}} /> 
                        : 
                            <Icon w={8} h={8} mr={15} as={AiOutlineDesktop} onClick={handleNavState} style={{cursor: 'pointer'}} /> 
                    : 
                        navList 
                        ? 
                            <HamburgerIcon w={8} h={8} mr={15} onClick={handleNavState} style={{cursor: 'pointer'}} /> 
                        : 
                            <Icon w={8} h={8} mr={15} as={AiOutlineClose} onClick={handleNavState} style={{cursor: 'pointer'}} /> 
                } 
            </Flex> 
        </Box> 
    ) 
} 

export default Header; 