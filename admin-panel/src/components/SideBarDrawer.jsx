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
import {
  FiGrid,
  FiUser,
  FiAward,
  FiFileText,
  FiClipboard,
  FiHelpCircle
} from "react-icons/fi";

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
            <NavItem icon={FiGrid} label="Dashboard" active />
            <NavItem icon={FiUser} label="Users" />
            <NavItem icon={FiAward} label="Transactions" />
            <NavItem icon={FiFileText} label="Catalogues" />
            <NavItem icon={FiClipboard} label="Other" />
            <Divider />
            <NavItem icon={FiHelpCircle} label="Help & Support" />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
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

export default SidebarDrawer;
