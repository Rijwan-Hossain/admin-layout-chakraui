import React from 'react'; 
import {
    Box, Flex, List, ListItem
} from '@chakra-ui/react'

import { HamburgerIcon, AtSignIcon } from '@chakra-ui/icons'

function Header({handleNavState}) { 
    return ( 
        <Box bg="#f8f8f8" h="60px" style={{borderBottom: '2px solid #2D3748'}}> 
            <Flex pl={5} pt={3} justifyContent="space-between"> 
                <List> 
                    <Flex > 
                        <ListItem w="100px">A</ListItem> 
                        <ListItem w="100px">B</ListItem> 
                        <ListItem w="100px">C</ListItem> 
                    </Flex> 
                </List> 
                <HamburgerIcon w={8} h={8} mr={15} onClick={handleNavState} style={{cursor: 'pointer'}} /> 
            </Flex> 
        </Box> 
    ) 
} 

export default Header; 