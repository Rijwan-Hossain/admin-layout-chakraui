import React from 'react';
import { 
    Box, Heading, Flex, Spacer
} from "@chakra-ui/react"
import DataBlock from './blocks/dataBlocks.jsx'
import DataBlock2 from './blocks/dataBlock2'
import DataBlock3 from './blocks/dataBlock3'

import './blocks/effect.css'
import TestBlock from './blocks/TestBlock.js';

function Home() { 
    return ( 
        <Box m={5}> 
            <Heading size="md" mb={4}>Simple Data</Heading> 
            <DataBlock /> 

            {/* <Heading size="md" mb={4}>Simple Data 2</Heading> 
            <DataBlock2 />  */} 

            <Heading size="md" mb={4}>Test Block</Heading> 
            <TestBlock />

            <Heading size="md" mb={4}>Simple Data 3</Heading> 
            <DataBlock3 /> 
        </Box> 
    ) 
} 

export default Home;