import React from 'react'; 
import {
    Box, Flex, List, ListItem
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

function Header({handleNavState}) { 
    return ( 
        <Box style={{borderBottom: '2px solid #2D3748'}} h="60px"> 
            <Flex pl={5} pt={3}> 
                <HamburgerIcon w={8} h={8} onClick={handleNavState} style={{cursor: 'pointer'}} /> 

                <List w="100%"> 
                    <Flex style={{justifyContent: 'flex-end'}}> 
                        <ListItem w="100px">Abc</ListItem> 
                        <ListItem w="100px">Abc</ListItem> 
                        <ListItem w="100px">Abc</ListItem> 
                    </Flex> 
                </List> 
            </Flex> 
        </Box> 
    ) 
} 

export default Header; 