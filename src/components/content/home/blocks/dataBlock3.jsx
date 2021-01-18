import React from 'react';
import { 
    Box, Flex, Spacer, SimpleGrid
} from "@chakra-ui/react"

function DataBlock3() { 
    return ( 
        <SimpleGrid 
            templateColumns={{ base: "1fr", md:'auto', lg: "2fr 1fr" }} 
            spacing="30px" mb={10}> 

            <Box h="400px" bg="#F7FAFC" p={3} boxShadow="base" rounded="md"> 
                1 
            </Box> 
            {/* <Spacer />  */}
            <Box> 
                <SimpleGrid 
                    templateColumns={{ base: "1fr", md:'auto auto', lg: "1fr 1fr" }} 
                    spacing="30px"> 
                    <Box h="185px" p={3} bg="#F7FAFC" boxShadow="base" rounded="md"> 
                        2 
                    </Box> 
                    {/* <Spacer />  */}
                    <Box h="185px" p={3} bg="#F7FAFC" boxShadow="base" rounded="md"> 
                        3 
                    </Box> 
                </SimpleGrid> 
                <div style={{height: '30px'}}></div> 
                
                <SimpleGrid 
                    templateColumns={{ base: "1fr", md:'auto auto', lg: "1fr 1fr" }} 
                    spacing="30px"> 
                    <Box h="185px" p={3} bg="#F7FAFC" boxShadow="base" rounded="md"> 
                        4
                    </Box> 
                    {/* <Spacer />  */}
                    <Box h="185px" p={3} bg="#F7FAFC" boxShadow="base" rounded="md"> 
                        5
                    </Box> 
                </SimpleGrid> 
            </Box> 
        </SimpleGrid> 
    ) 
} 

export default DataBlock3;