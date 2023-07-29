/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FC } from "react";
import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: any;
}

// Layout component begins
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box sx={{ flex: 1 }}>
            <Navbar />
            <main>{children}</main>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
