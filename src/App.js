import React, {useState} from 'react'; 
import Header from './components/header/header'; 
import { Box, Flex } from "@chakra-ui/react"; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Navigation from './components/navigation'; 


// Contents
import Home      from './components/content/home/home.jsx'
import About     from './components/content/about.jsx'
import Blog      from './components/content/blog.jsx'
import Contact   from './components/content/contact.jsx'
import Customers from './components/content/customers.jsx'
import Employees from './components/content/employees.jsx'
import Help      from './components/content/help.jsx'
import Order     from './components/content/order.jsx'
import Product   from './components/content/product.jsx'
import Users     from './components/content/users.jsx'

import './app.css'; 

function App() { 
    let [navList, setNavList] = useState(true) 

    const handleNavState = () => setNavList(!navList) 

    return ( 
      <BrowserRouter> 
          <Flex style={{height: '100vh'}}> 
              <Navigation navList={navList} /> 

              <Box bg="#edf2f9" w="100%" style={{overflowY: 'scroll',transition: 'all 0.4s'}}> 
              
                {/* Header */} 
                <Header handleNavState={handleNavState} /> 

                {/* Main content of every page */} 
                <Switch> 
                  <Route path="/"           component={Home} exact /> 
                  <Route path="/about"      component={About} /> 
                  <Route path="/contact"    component={Contact} /> 
                  <Route path="/product"    component={Product} /> 
                  <Route path="/order"      component={Order} /> 
                  <Route path="/users"      component={Users} /> 
                  <Route path="/customers"  component={Customers} /> 
                  <Route path="/employees"  component={Employees} /> 
                  <Route path="/blog"       component={Blog} /> 
                  <Route path="/help"       component={Help} /> 
                </Switch> 
              </Box> 
          </Flex> 
        </BrowserRouter> 
    ) 
} 

export default App; 