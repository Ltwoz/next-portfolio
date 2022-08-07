import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <Box bg="transparent" as="nav" zIndex={2} w="100%" position="absolute">
            <Container
                display="flex"
                p={5}
                maxW="950px"
                wrap="wrap"
                align="center"
                justifyContent="space-between"
            >
                <Flex align="center">
                    <Heading as="h1" fontSize={26}>
                        <Link href="/" scroll={false}>
                            <Text cursor="pointer">
                                Warrapat Portfolio
                            </Text>
                        </Link>
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    alignItems="center"
                    spacing={6}
                >
                    <Link href="/">
                        <Text as='h1' fontSize={20} cursor="pointer">
                            About
                        </Text>
                    </Link>
                    <Link href="/">
                        <Text as='h1' fontSize={20} cursor="pointer">
                            Expertise
                        </Text>
                    </Link>
                    <Link href="/projects">
                        <Text as='h1' fontSize={20} cursor="pointer">
                            Projects
                        </Text>
                    </Link>
                    <Link href="/resume">
                        <Text as='h1' fontSize={20} cursor="pointer">
                            Resume
                        </Text>
                    </Link>
                </Stack>
            </Container>
        </Box>
    );
};

export default Navbar;
