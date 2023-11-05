import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo1 from "../Images/logo/buycar.png";
import { NavLink, Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";
const links = [
  { path: "/", title: "OEM" },
  { path: "/admin", title: "Admin" },
  // { path: "/watchlist", title: "Saved" }
];

const links2 = [
  { path: "/", title: "Home" },
  { path: "/admin", title: "Admin" },
  { path: "/login", title: "Signup / Register" },
];

const defaultLinkStyle = {
  textDecoration: "none",
  color: "#ffd58c",
  fontSize: "20px",
  letterSpacing: "1px",
  fontWeight: "800",
};
const activeLinkStyle = {
  width: "80px",
  textDecoration: "none",
  color: "white",
  borderBottom: "4px solid gray",
  borderRadius: "10px",
  paddingBottom: "3px",
  fontSize: "20px",
  fontWeight: "bold",
  letterSpacing: "1px",
  margin: "auto",
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      style={{
        zIndex: 10,
        position: "sticky",
        width: "100%",
        top: "0px",

        fontSize: "15px",
        background: "#171819",
      }}
    >
      <Box
        bg={useColorModeValue("transparent")}
        background={"#16171A"}
        color={"#d5d5d5"}
        px={4}
      >
        <Flex
          h={14}
          pl={5}
          pr={75}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack spacing={3}>
            <Select
              fontSize={13}
              w={500}
              variant="unstyled"
              placeholder={
                <p>
                  <i class="fa-solid fa-circle-info"></i> VIEW COMPANY
                  OBSERVER_SECURITY
                </p>
              }
            />
          </Stack>

          <Stack spacing={3}>
            <Select
              fontSize={12}
              variant="unstyled"
              placeholder="SEVERITY: ALL"
            />
          </Stack>

          <div>
            <Stack spacing={0} direction="row" align="center">
              <button
                style={{
                  padding: "10px 30px 10px",
                  backgroundColor: "#222327",
                  fontSize:"14px"
                }}
              >
                Simple View
              </button>
              <button
                style={{
                  backgroundColor: "#0B57C3",
                  padding: "10px 30px 10px",
                  fontSize:"14px"
                }}
                colorScheme="blue"
                size="lg"
              >
                Enriched View
              </button>
            </Stack>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
