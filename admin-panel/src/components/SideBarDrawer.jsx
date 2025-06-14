import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  Icon,
  Text,
  Flex,
  Divider
} from "@chakra-ui/react";
import React from "react";
import {
  FiGrid,
  FiUser,
  FiAward,
  FiFileText,
  FiClipboard,
  FiHelpCircle
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
// import { NavItem } from "./Sidebar2";
const SidebarDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottom="1px solid #edf2f7">
          <img
            src="https://97cars.com/logo.png"
            alt="Logo"
            style={{ height: "30px" }}
          />
          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody>
          <VStack spacing={5} align="stretch">
            <NavItem icon={FiGrid} label="Dashboard" to= "/" />
            <NavItem icon={FiUser} label="Users" to="/users" />
            <NavItem icon={FiAward} label="Transactions" to="/transactions" />
            <NavItem icon={FiFileText} label="Catalogues" to ="/catalogues" />
            <NavItem icon={FiClipboard} label="Other" to ="/others" />
            <Divider />
            <NavItem icon={FiHelpCircle} label="Help & Support" />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const NavItem = ({ icon, label, to }) => {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
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
export default SidebarDrawer;
