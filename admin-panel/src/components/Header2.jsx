import {
  Flex,
  Heading,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Box
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SidebarDrawer from "./SidebarDrawer"; // separate drawer version

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Flex
        as="header"
        bg="white"
        px={6}
        py={4}
        align="center"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        {isMobile && (
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
            aria-label="Open menu"
            mr={4}
          />
        )}
            {/* props passed to the box  */}
        <Box  display={['inline', 'flex', 'none']} size="md">
          <a href="https://97cars.com/landing-page">
            <img
              src="https://97cars.com/logo.png"
              alt="97cars"
              style={{ height: "40px", width: "auto", cursor: "pointer" }}
            />
          </a>
        </Box>

        <Spacer />

        <Menu>
          <MenuButton>
            <Avatar size="sm" name="Admin User" />
          </MenuButton>
          <MenuList>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      {/* Mobile drawer sidebar */}
      <SidebarDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
