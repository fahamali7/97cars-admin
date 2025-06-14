// import Sidebar2 from './Sidebar2';
// import Header from './Header';
// import { Box, Flex } from "@chakra-ui/react";

// const Layout2 = ({ children }) => {
//   return (
//     <Flex>
//       <Sidebar2 />
//       <Box flex="1">
//         <Header />
//         <Box p={4}>{children}</Box>
//       </Box>
//     </Flex>
//   );
// };

// export default Layout2; 
// above code shows Hamburger icon on top of header
import React from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import Sidebar2 from "./Sidebar2";
import Header2 from "./Header2";
import { Outlet } from "react-router-dom";
const Layout2 = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex h="100vh" overflow="hidden">
      {isDesktop && <Sidebar2 />}
      
      <Flex direction="column" flex="1" overflow="hidden">
        <Header2 />
        <Box as="main" p={4} overflowY="auto" h="full">
          {/* {children} */}
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout2;
