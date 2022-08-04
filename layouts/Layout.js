import React from "react";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function Layout({ children }) {
    return (
        <Box>
            <Head>
                <title>Warrpat Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Warrapat's website" />
                <meta name="author" content="Warrapat Choedchusakunrat" />
                <meta name="author" content="Ltwoz" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Container maxW="container.lg" p={5} h="100vh">
                {children}
            </Container>
        </Box>
    );
}

export default Layout;
