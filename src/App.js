import React, {useState} from 'react'; 
import Header from './components/header/header'; 
import { Box, Flex } from "@chakra-ui/react"; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Navigation from './components/navigation'; 


// Contents
import Home           from './components/content/home/home.jsx'
import About          from './components/content/about.jsx'
import Blog           from './components/content/blog.jsx'
import Contact        from './components/content/contact.jsx'
import Customers      from './components/content/customers.jsx'
import Employees      from './components/content/employees.jsx'
import Help           from './components/content/help.jsx'
import Order          from './components/content/order.jsx'
import Product        from './components/content/product.jsx'
import Users          from './components/content/users.jsx'
import OrderDetails   from './components/content/OrderDetails'

import './app.css'; 

function App() { 
    let [navList, setNavList] = useState(true) 

    const handleNavState = () => setNavList(!navList) 

    return ( 
      <BrowserRouter> 
          <Flex 
            style={{height: '100vh'}} 
            onClick={() => { 
              window.innerWidth <= 600 && !navList && handleNavState() 
            }}> 

              <Navigation navList={navList} handleNavState={handleNavState} /> 

              <Box bg="#edf2f9" w="100%" style={{overflowY: 'scroll', transition: 'all 0.4s'}}> 
              
                {/* Header */} 
                <Header handleNavState={handleNavState} /> 

                {/* Main content of every page */} 
                <Switch> 
                  <Route path="/"               component={Home} exact /> 
                  <Route path="/about"          component={About} exact /> 
                  <Route path="/contact"        component={Contact} exact /> 
                  <Route path="/product"        component={Product} exact /> 
                  <Route path="/order"          component={Order} exact/> 
                  <Route path="/users"          component={Users} exact /> 
                  <Route path="/customers"      component={Customers} exact /> 
                  <Route path="/employees"      component={Employees} exact /> 
                  <Route path="/blog"           component={Blog} exact /> 
                  <Route path="/help"           component={Help} exact /> 
                  <Route path="/order/:slug"    component={OrderDetails} /> 
                </Switch> 
              </Box> 
          </Flex> 
        </BrowserRouter> 
    ) 
} 

export default App; 