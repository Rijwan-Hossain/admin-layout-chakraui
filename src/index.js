import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme  } from "@chakra-ui/react"

import {Provider} from 'react-redux' 
import store from './store/index' 


// const theme = extendTheme({ 
//   styles: { 
//     global: { 
//       // styles for the `body`
//       body: { 
//         fontFamily: "poppins" 
//       }, 
//       // styles for the `a`
//       a: {
//         color: "teal.500",
//         _hover: {
//           textDecoration: "underline",
//         }, 
//       }, 
//     }, 
//   }, 
// }) 


ReactDOM.render( 
  <Provider store={store}> 
    <ChakraProvider> 
      <App /> 
    </ChakraProvider> 
  </Provider>, 
  document.getElementById('root') 
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
