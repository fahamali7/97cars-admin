
import {
  Flex,
  Box,
  Button,
  Text,
  Heading,
  Spacer,
  IconButton,
  Avatar,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Sidebar from "./Sidebar";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex
      as="header"
      bg={bg}
      px={6}
      py={4}
      align="center"
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      {/* <Box mr={5} ml={0}>
    <Sidebar />
      </Box> */}
      
      
      <Heading size="md" color="blue.600">
      <a href="https://97cars.com/landing-page">
      <img src="https://97cars.com/logo.png" alt="97cars" 
      style={{ height: '40px', width: 'auto' }}/>
      </a>
      </Heading>
      <Spacer />
      {/* <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle theme"
        mr={4}
      /> */}
      <Menu > 
  <MenuButton colorScheme="blue">
  <Avatar color="white" size="sm" name="Admin User" />
  </MenuButton>
  <MenuList>
    <MenuGroup title='Profile'>
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title='Help'>
      <MenuItem>Contact Us</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
    </Flex>
  );
};

export default Header;
