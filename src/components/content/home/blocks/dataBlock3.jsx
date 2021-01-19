import React from 'react';
import { Box, Flex, SimpleGrid, Text, List, ListItem, Divider } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";

import f1 from '../../../../assets/images/orderImg/f1.jpg'
import f2 from '../../../../assets/images/orderImg/f2.jpg'
import f3 from '../../../../assets/images/orderImg/f3.jpg'

import './effect.css'

function DataBlock3() { 
    const history = useHistory();

    const recentOrders = [ 
        { 
            name: 'Chicken Pizza', 
            img: f1, 
            address: 'Pragoti Sarani, Badda, Dhaka-Bangladesh', 
            time: new Date(), 
            price: 1200, 
            quantity: 3, 
            size: '12 inch', 
            type: 'Familly', 
            slug: 'chicken_pizza'
        }, 
        { 
            name: 'Beef Burger', 
            img: f2, 
            address: 'Mirpur-10, Dhaka-Bangladesh', 
            time: new Date(), 
            price: 350, 
            quantity: 2, 
            size: 'Small', 
            type: 'Single', 
            slug: 'beef_burger'
        }, 
        { 
            name: 'Sub Sandwich', 
            img: f3, 
            address: 'Dhanmondi, Dhaka-Bangladesh', 
            time: new Date(), 
            price: 180, 
            quantity: 3, 
            size: 'Big', 
            type: 'Single', 
            slug: 'sub_sandwich'
        } 
    ] 


    return ( 
        <SimpleGrid 
            templateColumns={{ base: "1fr", md:'auto', lg: "2fr 1fr" }} 
            spacing="30px" mb={10}> 

            <Box h="400px" bg="#F7FAFC" p={3} boxShadow="base" rounded="md" style={{overflowY: 'scroll'}}> 
                <Text as="h3" mb={5} style={{fontFamily: 'Poppins', fontSize: '24px', fontWeight: '300'}}>
                    Recent Orders 
                </Text> 

                <List> 
                    { 
                        recentOrders.map(order => { 
                            return ( 
                                <Box 
                                    rounded="md" 
                                    onClick={() => history.push(`/order/${order.slug}`, order)}> 

                                    <ListItem key={order.slug} p={4} className="order_items"> 
                                        <Flex> 
                                            <img name={order.name} src={order.img} 
                                                style={{border: '1px solid rgb(220, 220, 220)'}}
                                                height="100px" width="100px" /> 
                                            
                                            <Box>
                                                <Text ml={4} fontSize="20px">{order.name}</Text> 
                                                <Text ml={4}>{order.address}</Text>
                                            </Box>
                                        </Flex> 
                                    </ListItem> 

                                    <Divider /> 
                                </Box> 
                            ) 
                        }) 
                    } 
                </List> 
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