import { 
    Box, Flex, Spacer 
} from "@chakra-ui/react"; 

function TestBlock() { 
    return ( 
        <Flex wrap="wrap" mb={10}> 
            <Box flexGrow="1" bg="tomato" w="10rem" h="400px" p={4} color="white">1</Box> 
            <Box flexGrow="2" bg="gray.300" w="15rem" h="400px" p={4} color="white">2</Box> 

            <Box flexGrow="1" w="15rem" color="white"> 
                <Flex direction={{ base: "column", md: "row", lg: "column" }}> 
                    <Box flexGrow="1" bg="green.300" w="100%" h="185px" p={4} color="white">3</Box> 
                    <Box flexGrow="1" bg="red.300" w="100%" h="185px" p={4} color="white">3</Box> 
                </Flex> 
            </Box> 
        </Flex> 
    ) 
} 

export default TestBlock; 