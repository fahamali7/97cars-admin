// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Flex,
//   IconButton,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Image,
//   Table,
//   Tbody,
//   Td,
//   Th,
//   Tr,
//   Tooltip,
//   TableContainer,
//   Thead,
// } from "@chakra-ui/react";
// import {
//   FiEye,
//   FiSearch,
//   FiLogIn,
//   FiSlash,
//   FiFilter,
//   FiArrowDown,
// } from "react-icons/fi";
// import { Link } from "react-router-dom";
// // import { dealer } from "../api/dealer";
// import axios from "axios";

// const CatalogueCard = () => {
//   const [dealers, setDealers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");



//
//  const handleSearchChange = (e) => setSearchTerm(e.target.value);
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
  Tooltip,
  VStack,
  Text,
} from "@chakra-ui/react";
import {
  FiEye,
  FiSearch,
  FiLogIn,
  FiSlash,
  FiFilter,
  FiArrowDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios"

const CatalogueCard = () => {
  const [dealers, setDealers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredDealers = dealers.filter((dealer) =>
    dealer.businessName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Fetching data from localhost API (backend server)
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dealer");
        setDealers(response.data)
        // console.log("data Fetched")
      } catch (error) {
        console.log("Error fetching", error);

      }
    };
    fetchData();
  }, []);


  return (
    <Box w={['300', '400', '100%']}>
      <Flex justifyContent={"space-between"} gap={4}>
        <InputGroup w="40%">
          <InputLeftElement pointerEvents="none">
            <FiSearch color="#4A5568" />
          </InputLeftElement>
          <Input
            placeholder="Search by Business Name"
            value={searchTerm}
            onChange={handleSearchChange}
            _placeholder={{ opacity: 1, color: "gray.600" }}
          />
        </InputGroup>

        <Flex gap={3} >
          <Button leftIcon={<FiFilter />} variant="outline" colorScheme="blue">
            Filter
          </Button>
          <Button leftIcon={<FiArrowDown />} variant="outline" colorScheme="gray">
            Sort
          </Button>
        </Flex>
      </Flex>

      <Box border="1px" mt="6" borderColor="gray.200" borderRadius="8" p="0" w={['300', '400', '100%']}>
        <Table size="md" fontSize="xs" width="100%" minW="1000px" w={['300', '400', '100%']} >
          <Tbody color="gray.600" w={['200', '300', '100%']}>
            <Tr bg="RGBA(0, 0, 0, 0.04)">
              <Th><Checkbox colorScheme="blue" /></Th>
              <Th> #</Th>
              <Th>Profile</Th>
              <Th>Business Name</Th>
              <Th>Phone</Th>
              <Th>City</Th>
              <Th>State</Th>
              <Th>#Products</Th>
              <Th>Subscription</Th>
              <Th>Actions</Th>
            </Tr>
            {filteredDealers.map((dealer, index) => (
              <Tr key={dealer._id}>
                <Td><Checkbox colorScheme="blue" /></Td>
                <Td>{index + 1}</Td>
                <Td>
                  <Image
                    boxSize="40px"
                    borderRadius="full"
                    src={dealer.businessProfilePhoto}
                    alt={dealer.businessName}
                  />
                </Td>
                <Td>
                  <VStack>
                    <Text >
                      {dealer.businessName}
                    </Text>
                    <Text noOfLines={1}>
                      {new Date(dealer.createdAt).toLocaleDateString()}
                    </Text>
                  </VStack>
                </Td>

                <Td>{dealer.contactNumber}</Td>
                <Td>{dealer.city}</Td>
                <Td>{dealer.state}</Td>
                <Td>{dealer.numberOfProducts}</Td>
                <Td>
                  <Button
                    variant="outline"
                    size="sm"
                    bg="white"
                    color={dealer.subscription === "Pro" ? "green.400" : "orange.400"}
                    fontWeight="normal"
                    fontSize="12px"
                  >
                    {dealer.subscription}
                  </Button>
                </Td>
                <Td>
                  <Flex gap={2}>
                    <Tooltip label="View" bg="white" color="blue.400">
                      {/* <Link to={/admin/view-dealer/${dealer._id}}> */}
                      <IconButton
                        icon={<FiEye />}
                        color="#4299E1"
                        variant="outline"
                        size="sm"
                        aria-label="View"
                      />
                      {/* </Link> */}
                    </Tooltip>
                    <Link to={"/admin-login"}>
                      <Tooltip label="Login as Dealer" bg="white" color="purple.400">
                        <IconButton
                          icon={<FiLogIn />}
                          color="#9F7AEA"
                          variant="outline"
                          size="sm"
                          aria-label="Login"
                        />
                      </Tooltip>
                    </Link>
                    <Tooltip label="Block Dealer" bg="white" color="red.400">
                      <IconButton
                        icon={<FiSlash />}
                        color="#F56565"
                        variant="outline"
                        size="sm"
                        aria-label="Block"
                      />
                    </Tooltip>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default CatalogueCard;