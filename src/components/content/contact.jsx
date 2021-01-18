import React from 'react';
import { 
    Box, Heading, Flex, Spacer
} from "@chakra-ui/react"
import DataBlock from './home/blocks/dataBlocks.jsx'
import DataBlock2 from './home/blocks/dataBlock2'
import DataBlock3 from './home/blocks/dataBlock3'
import './home/blocks/effect.css'

function Content() { 
    return ( 
        <Box m={5}> 
            <Heading size="md" mb={4}>Simple Data</Heading> 
            <DataBlock /> 

            <Heading size="md" mb={4}>Simple Data 2</Heading> 
            <DataBlock2 /> 

            <Heading size="md" mb={4}>Simple Data 3</Heading> 
            <DataBlock3 /> 
        </Box> 
    ) 
} 

export default Content;