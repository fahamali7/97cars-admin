// import React from 'react'
// // import { Router, Routes, Route} from 'react-router-dom'
// import ReactDOM from 'react-dom/client'
// import { Box, CardHeader, Flex} from '@chakra-ui/react'
// import Layout from './components/Layout'

// const Dashboard = ()=>{
//   return (
//     <>
//     <h1>Welcome to admin Panel</h1>
//     <p>Main content area</p>
//     </>
//   )
// }
// const App =() => {
//   return ( 
//     <Box className='App'>
//       <Layout>
//       {/* <Dashboard/> */}
//       </Layout >
//     </Box>
  
//   );
// }
// export default App

//Below code is for testing(mobileDrawer code integrated)

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout2 from "./components/Layout2"; // adjust path if needed
import ComingSoon from "./pages/ComingSoon";
import Help from "./pages/Help";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Catalogue from "./pages/Catalogue";
import Transactions from "./pages/Transactions";
import Other from "./pages/Other";

const App =() =>{
return (
  <ChakraProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Layout2 />} >
        <Route index element={<Dashboard />}/>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path ="transactions" element={<Transactions />} />
        <Route path="catalogues" element={<Catalogue />} />
        <Route path="others" element={<Other />} />
        <Route path="help" element={<Help />} />
      </Route>
      </Routes>
      </Router>
  </ChakraProvider>
  );
}

export default App;
