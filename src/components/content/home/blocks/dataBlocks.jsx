import React from 'react'; 
import { 
    Text, Box, Flex, Spacer, Center, 
    SimpleGrid
} from "@chakra-ui/react" 

function DataBlocks() { 
    const styleObj = { transition: 'all 0.3s ease-in-out' } 

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 4}} spacing="30px" mb={10}> 
            <Box bg="#F7FAFC" h="100px" p={3} boxShadow="base" rounded="md" style={styleObj} className="boxhover"> 
                1 
            </Box> 

            <Box bg="#F7FAFC" h="100px" p={3} boxShadow="base" rounded="md" style={styleObj} className="boxhover"> 
                2 
            </Box>  

            <Box bg="#F7FAFC" h="100px" p={3} boxShadow="base" rounded="md" style={styleObj} className="boxhover"> 
                3 
            </Box> 

            <Box bg="#F7FAFC" h="100px" p={3} boxShadow="base" rounded="md" style={styleObj} className="boxhover"> 
                4 
            </Box> 
        </SimpleGrid> 
    ) 
} 

export default DataBlocks;