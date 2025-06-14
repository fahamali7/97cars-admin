import React from "react";
import Sidebar2 from "../components/Sidebar2";
import Header2 from "../components/Header2";
// import Layout from "../components/Layout2";
import { Box, Text, Container, VStack,Heading, Button} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;
const ComingSoon = () => {
  const handleButtonClick = () => {
    window.location.href = "/";
  };

  return (
    // <Layout>
    <Box>
    <Container maxW="8xl" h="100vh">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        position="relative"
        overflow="hidden"
      >
        {/* Decorative Elements */}
        <Box
          position="absolute"
          width="400px"
          height="400px"
          borderRadius="full"
          bg="blue.50"
          filter="blur(80px)"
          animation={`${float} 6s ease-in-out infinite`}
          top="10%"
          left="20%"
        />
        <Box
          position="absolute"
          width="300px"
          height="300px"
          borderRadius="full"
          bg="blue.100"
          filter="blur(80px)"
          animation={`${float} 8s ease-in-out infinite`}
          bottom="10%"
          right="20%"
        />

        <VStack
          spacing={8}
          zIndex="1"
          textAlign="center"
          animation={`${pulse} 3s infinite`}
        >
          <VStack spacing={4}>
            <Heading
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
             // fontWeight="900"
              bgGradient="linear(to-r, blue.400, blue.600)"
              bgClip="text"
              letterSpacing="tight"
              aria-label="Coming Soon"
            >
              COMING SOON
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="blue.600"
              maxW="600px"
              aria-label="We are currently working hard building this page"
            >
              We're crafting something amazing for you. Stay tuned for an
              exceptional experience.
            </Text>
          </VStack>

          <Button
            size="lg"
            height="60px"
            px="8"
            fontSize="lg"
            bgGradient="linear(to-r, blue.400, blue.500)"
            color="white"
            borderRadius="full"
            _hover={{
              bgGradient: "linear(to-r, blue.500, blue.600)",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            _active={{
              transform: "translateY(0)",
            }}
            onClick={handleButtonClick}
            aria-label="Go to Home"
            transition="all 0.2s"
          >
            Return Home
          </Button>
        </VStack>
      </Box>
    </Container>
    </Box>
    // </Layout>
  );
};

export default ComingSoon;