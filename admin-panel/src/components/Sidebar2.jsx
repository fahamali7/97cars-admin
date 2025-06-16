import React from 'react';
import {
  Box,
  Flex,
  Text,
  VStack,
  Icon,
  Divider,
  Spacer,
  Container,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  FiGrid,
  FiList,
  FiFileText,
  FiClipboard,
  FiHelpCircle,
  FiUser,
  FiAward
} from "react-icons/fi";
import { HamburgerIcon } from '@chakra-ui/icons';
import {Link, useLocation} from 'react-router-dom';

const Sidebar2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const SidebarContent = (
    <Box
      w={{ base: 'full', lg: '240px' }}
      h="100vh"
      bg="white"
      borderRightWidth="1px"
      p={4}
    >
      <Flex align="center" mb={6} justifyContent="space-between">
        <img
          src='https://97cars.com/logo.png'
          alt="Logo"
          style={{ height: '40px', width: 'auto', cursor: 'pointer' }}
        />
        {!isDesktop && <DrawerCloseButton position="relative" top={0} right={0} />}
      </Flex>
      {/* <Divider mb={4} /> */}
      <VStack spacing={5} align="stretch">
        <NavItem icon={FiGrid} label="Dashboard" to = "/" />
        <NavItem icon={FiUser} label="Users" to ="/users" />
        <NavItem icon={FiAward} label="Transactions" to ="/transactions" />
        <NavItem icon={FiFileText} label="Catalogues"  to = "/catalogues"/>
        <NavItem icon={FiClipboard} label="Other" to ="/others" />
        <NavItem icon={FiHelpCircle} label="Help & Support" to = "/Contact-Us" />
      </VStack>
    </Box>
  );

  if (isDesktop) {
    return SidebarContent;
  }

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        colorScheme='white'
        bg='gray.500'
        position="fixed"
        top={4}
        left={4}
        zIndex={20}
      >
        <HamburgerIcon />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>{SidebarContent}</DrawerContent>
      </Drawer>
    </>
  );
};

export const NavItem = ({ icon, label, to }) => {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link to = {to} style={{ textDecoration: 'none' }}> 

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
  </Link>
);
};
export default Sidebar2;