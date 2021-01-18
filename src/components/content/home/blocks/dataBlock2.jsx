import React from 'react';
import { 
    Box, Flex, Spacer, SimpleGrid 
} from "@chakra-ui/react"
import './effect.css'

function DataBlock2() { 
    return ( 
        <SimpleGrid 
            autoFlow="row dense" 
            templateColumns={{ base: "1fr", md:'1fr 2fr', lg: "1fr 2fr 1fr" }} 
            spacing="30px" mb={10}> 

            <Box h="400px" bg="#F7FAFC" p={3} boxShadow="base" rounded="md"> 
                1 
            </Box> 
            <Box h="400px" bg="#F7FAFC" p={3} boxShadow="base" rounded="md"> 
                2 
            </Box> 

            <SimpleGrid 
                columns={{sm: 1, md: 2, lg: 1}} 
                templateColumns={{ base: "1fr", md:'1fr 1fr', lg: '1fr'}} 
                spacing="30px"> 
                <Box h="185px" p={3} bg="#F7FAFC" boxShadow="base" rounded="md"> 
                    3 
                </Box> 

                <Box h="185px" p={3} bg="#F7FAFC" boxShadow="base" rounded="md"> 
                    4 
                </Box> 
            </SimpleGrid> 
        </SimpleGrid> 
    ) 
} 

export default DataBlock2;