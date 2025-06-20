import React, { useEffect, useState } from "react";
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
  TableContainer,
  Thead,
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
// import { dealer } from "../api/dealer";
import axios from "axios";

// const dummyDealers = [
//   {
//     _id: "1",
//     businessName: "Auto Wheels Pvt Ltd",
//     businessProfilePhoto: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
//     contactNumber: "+91-9876543210",
//     email: "autowheels@example.com",
//     city: "Pune",
//     state: "Maharashtra",
//     numberOfProducts: 23,
//     subscription: "Pro",
//     createdAt: "2024-06-10T09:00:00Z",
//   },
//   {
//     _id: "2",
//     businessName: "City Motors",
//     businessProfilePhoto: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
//     contactNumber: "+91-9123456789",
//     email: "citymotors@example.com",
//     city: "Mumbai",
//     state: "Maharashtra",
//     numberOfProducts: 14,
//     subscription: "Basic",
//     createdAt: "2024-06-12T12:00:00Z",
//   },
//   {
//     _id: "3",
//     businessName: "Speed Car Hub",
//     businessProfilePhoto: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
//     contactNumber: "+91-9000012345",
//     email: "speedhub@example.com",
//     city: "Nagpur",
//     state: "Maharashtra",
//     numberOfProducts: 35,
//     subscription: "Pro",
//     createdAt: "2024-06-14T15:30:00Z",
//   },
//   {
//     _id: "4",
//     businessName: "Fast on Wheels",
//     businessProfilePhoto: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
//     contactNumber: "+91-9000012345",
//     email: "fastwheel@example.com",
//     city: "Kota",
//     state: "Rajasthan",
//     numberOfProducts: 40,
//     subscription: "Pro",
//     createdAt: "2024-06-24T15:30:00Z",
//   }
// ];
const CatalogueCard = () => {
  const [dealers, setDealers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 

//Fetching data from localhost API (backend server)
useEffect(()=>{

  const fetchData = async ()=>{
  try {
    const response =await axios.get("http://localhost:3000/api/dealer");
    setDealers(response.data)
    // console.log("data Fetched")
  } catch (error) {
    console.log("Error fetching", error);
    
  }
}; 
fetchData();
}, []);

 const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredDealers = dealers.filter((dealer) =>
    dealer.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealer.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dealer.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  

  return (
    <Box p={4}>
      <Flex justifyContent={"space-between"} gap={4} mb={4}>
        <InputGroup w="50%">
          <InputLeftElement pointerEvents="none">
            <FiSearch color="#4A5568" />
          </InputLeftElement>
          <Input
            placeholder="Search by Business Name or City or State"
            value={searchTerm}
            onChange={handleSearchChange}
            _placeholder={{ opacity: 1, color: "gray.600" }}
          />
        </InputGroup>

        <Flex gap={3}>
          <Button leftIcon={<FiFilter />} variant="outline" colorScheme="blue">
            Filter
          </Button>
          <Button leftIcon={<FiArrowDown />} variant="outline" colorScheme="gray">
            Sort
          </Button>
        </Flex>
      </Flex>

      <Box border={1} mt={6} borderColor="gray.200" borderRadius="8" >
        <Table variant="simple" fontSize="sm" >
          
            <Thead>
              {/* use of map function if we go for column wise approach(2)  */}
            <Tr bg="RGBA(0, 0, 0, 0.04)">

              <Th><Checkbox colorScheme="blue" /></Th>
              <Th>#</Th>
              <Th>Profile</Th>
              {/* {view === "detailed" && <Th>Extra</Th>} */}
              <Th>Business Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>City</Th>
              <Th>State</Th>
              <Th>#Products</Th>
              <Th>Created</Th>
              <Th>Subscription</Th>
              <Th>Actions</Th>
            </Tr>
             </Thead>
             <Tbody color="gray.600">
            {filteredDealers.map((dealer, index) => {
              const {_id, businessProfilePhoto, businessName, email, contactNumber, city, state, numberOfProducts, createdAt, subscription}  = dealer;
              return (
              <Tr key={_id}>
                <Td><Checkbox colorScheme="blue" /></Td>
                <Td>{index + 1}</Td>
                <Td>
                  <Image
                    boxSize="40px"
                    borderRadius="full"
                    src={businessProfilePhoto}
                    alt={businessName}
                  />
                </Td>
                {/* {view === "detailed" && <Td>{city} </Td>} */}
                <Td>{businessName}</Td>
                <Td>{email}</Td>
                <Td>{contactNumber}</Td>
                <Td>{city}</Td>
                <Td>{state}</Td>
                <Td>{numberOfProducts}</Td>
                <Td>{new Date(createdAt).toLocaleDateString()}</Td>
                <Td>
                  <Button
                    variant="outline"
                    size="sm"
                    bg="white"
                    color={subscription === "Pro" ? "green.400" : "orange.400"}
                    fontWeight="normal"
                    fontSize="12px"
                  >
                    {subscription}
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
                    <Tooltip label="Login as Dealer" bg="white" color="purple.400">
                      <Link to ="/admin-login">
                      <IconButton
                        icon={<FiLogIn />}
                        color="#9F7AEA"
                        variant="outline"
                        size="sm"
                        aria-label="Login"
                      />
                      </Link>
                    </Tooltip>
                    
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
              )
})}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default CatalogueCard;