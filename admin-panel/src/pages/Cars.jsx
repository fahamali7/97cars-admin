// import React, { useEffect, useState } from "react";
// import CatalogueCard from "../components/CatalogueCard";
// import axios from "axios";

// const CarData = ()=>{
//     const [cars, setCars] = useState([]) 
//     const fetchData = async ()=>{
//       try {
//         const response =await axios.get("http://localhost:3000/api/cars");
//         setDealers(response.data)
//         // console.log("data Fetched")
//       } catch (error) {
//         console.log("Error fetching", error);

//       }
//     }; 
//     useEffect(()=>{
// fetchData();
//     }, [])
//     return(
//         <CatalogueCard/>
//     )
// }
// export default CarData;

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
import axios from "axios";

const CarData = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredDealers = cars.filter((car) =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    const fetchcarData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cars");
        setCars(response.data)
        // console.log("data Fetched")
      } catch (error) {
        console.log("Error fetching", error);

      }
    };
    fetchcarData();
  }, [])

  return (
    <Box w={['300', '400', '100%']} >
      <Flex justifyContent={"space-between"} gap={4}>
        <InputGroup w="40%">
          <InputLeftElement pointerEvents="none">
            <FiSearch color="#4A5568" />
          </InputLeftElement>
          <Input
            placeholder="Search by Car Type, Make, Model"
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

      <Box border="1px" mt="6" borderColor="gray.200" borderRadius="8" p="0" w={['300','400','100%']}>
        <Table size="md" fontSize="xs" width="100%" minW="728px" w={['300', '400', '100%']}>
          <Tbody color="gray.600" w={['200', '300', '100%']} >
            <Tr bg="RGBA(0, 0, 0, 0.04)">
              <Th><Checkbox colorScheme="blue" /></Th>
              <Th>#</Th>
              <Th>Profile</Th>
              <Th>Make</Th>
              <Th>Model</Th>
              <Th>Type</Th>
              <Th>Actions</Th>
            </Tr>
            {filteredDealers.map((car, index) => (
              <Tr key={car._id} py={0}>
                <Td py={0}><Checkbox colorScheme="blue" /></Td>
                <Td py={0}>{index + 1}</Td>
                <Td py={0}>
                  <Image
                    boxSize="40px"
                    borderRadius="full"
                    src={car.image}
                    alt={car.make}
                  />
                </Td>
                <Td py={0}>{car.make}</Td>
                <Td py={0}>{car.model}</Td>
                <Td py={0}>{car.type}</Td>
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
                      <IconButton
                        icon={<FiLogIn />}
                        color="#9F7AEA"
                        variant="outline"
                        size="sm"
                        aria-label="Login"
                      />
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
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default CarData;