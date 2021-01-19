import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react'

function OrderDetails({location}) { 
    const {state: product} = location 

    // address: 'Pragoti Sarani, Badda, Dhaka-Bangladesh', 
    // time: new Date(), 

    return ( 
        <Box m={20} style={{fontFamily: 'Poppins', fontWeight: 300}}> 
            <Flex wrap="wrap"> 
                <img src={product.img} alt={product.slug} width="500px" /> 
                <Box ml={5} p={10} boxShadow="base" bg="white"> 
                    <Text fontSize="22px" mb={3}> 
                        Name: {product.name} 
                    </Text> 
                   
                    <Text fontSize="18px" mb={3}> 
                        Price: {product.price} 
                    </Text> 
                    <Text fontSize="18px" mb={3}> 
                        Quantity: {product.quantity} 
                    </Text> 
                    <Text fontSize="18px" mb={3}> 
                        Total Price: {product.quantity * product.price} 
                    </Text> 
                    <Text fontSize="18px" mb={3}> 
                        Type: {product.type} 
                    </Text> 
                    <Text fontSize="18px" mb={3}> 
                        Size: {product.size} 
                    </Text> 
                    <Text fontSize="18px" mb={3}> 
                        Delivery Address: {product.address} 
                    </Text> 
                    <Text fontSize="18px" mb={3}> 
                        Order Date: {product.time.toString()} 
                    </Text> 
                </Box> 
            </Flex> 
        </Box> 
    ) 
} 

export default OrderDetails;