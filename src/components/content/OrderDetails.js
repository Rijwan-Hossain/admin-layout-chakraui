import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/react'

function OrderDetails({location}) { 
    const {state: product} = location 

    return ( 
        <Box 
            w={{base: '100%', md: '100%', lg: '100%'}} 
            style={{fontFamily: 'Poppins', fontWeight: 300}}> 

            <Flex wrap="wrap" m={{base: '0px', md:'20px', lg: '50px'}}> 
                <img src={product.img} alt={product.slug} width="500px" /> 

                <Box 
                    p={10} ml={{base: '0px', md:'0px', lg: '0px'}} 
                    mt={{base: '0px', md:'30px', lg: '0px'}} 
                    boxShadow="base" bg="white"> 
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