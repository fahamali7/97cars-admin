// import React from 'react'
// import {
// Box,
// Flex,
// Text,
// VStack,
// Icon,
// Divider,
// Spacer,
// Container
// } from "@chakra-ui/react";
// import{  
// Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   Button,
//   Input,
// } from '@chakra-ui/react'
// import {
//   FiGrid,
//   FiList,
//   FiFileText,
//   FiClipboard,
//   FiHelpCircle,
//   FiUser,
//   FiAward
// } from "react-icons/fi";
// import { color } from 'framer-motion'
// import { HamburgerIcon } from '@chakra-ui/icons';

// function Sidebar() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const btnRef = React.useRef()

//   return (
//     <>
//       <Button ref={btnRef} colorScheme='white' bg='gray.500' onClick={onOpen}>
//         <HamburgerIcon />
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement='left'
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           {/* <DrawerCloseButton /> */}
//           <DrawerHeader >
//             <Container display="flex" alignItems="center" justifyContent='space-between' width="50%" paddingLeft="0px" marginLeft="0" marginRight="21px" gap={2} marginBottom={4}>
//             <img
//               src='https://97cars.com/logo.png'
//               alt="Logo"
//               style={{ width:'max-content', cursor:'pointer'}}
//             />
//             <DrawerCloseButton/>
            
//             </Container>
//             <Divider colorScheme="blue"/>
//           </DrawerHeader>
//           <DrawerBody>
//       <VStack spacing={5} align="stretch">
//         <NavItem icon={FiGrid} label="Dashboard" active />
//         <NavItem icon={FiUser} label="Users" />
//         <NavItem icon={FiAward} label="Transactions" />
//         <NavItem icon={FiFileText} label="Catalogues" />
//         <NavItem icon={FiClipboard} label="Other" />
//         <NavItem icon={FiHelpCircle} label="Help & Support" />
//       </VStack>
//           <Spacer />
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   )
// }
// const NavItem = ({ icon, label, active }) => (
//   <Flex
//     align="center"
//     p={5}
//     borderRadius="lg"
//     bg={active ? "blue.50" : "transparent"}
//     color={active ? "blue.600" : "black"}
//     fontWeight={active ? "semibold" : "normal"}
//     _hover={{ bg: "blue.50", color: "blue.600" }}
//     cursor="pointer"
//   >
//     <Icon as={icon} boxSize={5} mr={3} />
//     <Text fontSize="sm">{label}</Text>
//   </Flex>
// );
// export default Sidebar
//Final code above(hamburger icon and drawer)


// Sidebar.jsx
import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  Divider,
  Spacer,
  Button,
} from "@chakra-ui/react";
import {
  FiGrid,
  FiList,
  FiFileText,
  FiClipboard,
  FiHelpCircle,
  FiUser,
  FiAward,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <Box
      as="aside"
      bg="white"
      w={{ base: "full", md: "240px" }}
      h="100vh"
      boxShadow="sm"
      p={4}
      borderRight="1px solid #edf2f7"
    >
      {/* <Flex align="center" mb={6}>
        <img src="https://97cars.com/logo.png" alt="Logo" style={{ width: '100px', cursor: 'pointer' }} />
        </Flex> */}

        <Spacer /> 

      {/* Nav Links */}
      <VStack spacing={4} align="stretch">
        <NavItem icon={FiGrid} label="Dashboard" active />
        <NavItem icon={FiUser} label="Users" />
        <NavItem icon={FiAward} label="Transactions" />
        <NavItem icon={FiFileText} label="Catalogue" />
        <NavItem icon={FiClipboard} label="Others" />
      </VStack>

      <Spacer />

      <Box mt="auto" pt={8}>
        <Divider mb={4} />
        <NavItem icon={FiHelpCircle} label="Help & Support" />
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, label, active }) => (
  <Flex
    align="center"
    p={3}
    borderRadius="lg"
    bg={active ? "blue.50" : "transparent"}
    color={active ? "blue.600" : "black"}
    fontWeight={active ? "semibold" : "normal"}
    _hover={{ bg: "blue.50", color: "blue.600" }}
    cursor="pointer"
  >
    <Icon as={icon} boxSize={5} mr={3} />
    <Text fontSize="sm">{label}</Text>
  </Flex>
);

export default Sidebar;
