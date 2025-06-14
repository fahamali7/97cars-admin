// import { Box, Flex, useBreakpointValue, useDisclosure, Drawer, DrawerOverlay, DrawerContent, IconButton} from "@chakra-ui/react";
// const { isOpen, onOpen, onClose } = useDisclosure();
// import { FiMenu } from "react-icons/fi";
// import Sidebar from "./Sidebar.jsx";
// import Header from "./Header.jsx";
// const Layout = ({ children }) => {
//     const {isOPen, onClose, onOpen} = useDisclosure();
//     const isMobile = useBreakpointValue({ base: true, md: false });
//     return(
//           <Flex direction="column" h="100vh">
//           <Header/>
//             <Flex flex={1} overflow={'hidden'}>
//                 {!isMobile ? (
//                     <Sidebar/>
//                 ) :(
//                         <Drawer isOpen={isOPen} placement="left" onClose={onClose}>
//                             <DrawerOverlay />
//                             <DrawerContent>
//                                 <Sidebar onClose={onClose} />
//                             </DrawerContent>
//                         </Drawer>   
//                 )}
                
//                 {/* <Box as = "aside" w="240px" h="100%" overflow="hidden">
//                    <Sidebar/>  
//                 </Box> */}
               
//             <Box as="main" flex={1} p={4} overflowY="auto">
//                 {isMobile && (
//                     <IconButton
//                     icon = {<FiMenu />}
//                     onClick={onOpen}
//                     variant="outline"
//                 />)}
//                 {children}
//                 </Box>     
//             </Flex>
//             </Flex>
//     );
// }
// export default Layout;

// Layout.jsx
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";       // your sidebar component
import Header from "./Header";    // your header component

const Layout = ({ children }) => {
  return (
    <Flex direction="column" h="100vh">
      {/* Header */}
      <Header />

      {/* Sidebar + Main Content */}
      <Flex flex="1">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <Box as="main" p={6} flex="1" bg="gray.50" overflowY="auto">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;

