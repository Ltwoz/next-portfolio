import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Heading,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";

function WalkthroughPopover({ data }) {
    const initialFocusRef = React.useRef();
    return (
        <Popover
            initialFocusRef={initialFocusRef}
            placement="bottom"
            closeOnBlur={true}
        >
            <PopoverTrigger>
                <Box
                    bg="whiteAlpha.500"
                    borderRadius="xl"
                    w="19rem"
                    textAlign="center"
                    cursor="pointer"
                    p={4}
                >
                    <Box p={4} minH="200px" borderRadius="xl"></Box>
                    <Text fontSize={26}>{data.name}</Text>
                </Box>
            </PopoverTrigger>
            <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                    {data.full_name}
                </PopoverHeader>
                <PopoverArrow bg="blue.800" />
                <PopoverBody>{data.description}</PopoverBody>
                <PopoverFooter
                    border="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    pb={4}
                >
                    <ButtonGroup size="sm">
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button colorScheme="blue" ref={initialFocusRef}>
                                Check out
                            </Button>
                        </a>
                    </ButtonGroup>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    );
}

const Projects = () => {
    const [Repos, setRepos] = useState([]);
    useEffect(() => {
        (async () => {
            let { data } = await axios.get(
                "https:/api.github.com/users/Ltwoz/repos"
            );
            setRepos(data);
        })();
    }, []);

    return (
        <Layout>
            <Container p={0} maxW="650px" pt="100px">
                <Heading as="h3" fontSize={30} mb={6}>
                    Projects
                </Heading>
                <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                    <Box
                        bg="whiteAlpha.500"
                        borderRadius="xl"
                        w="19rem"
                        p={4}
                        mb="40px"
                    >
                        <Box p={4} minH="180px" borderRadius="xl"></Box>
                        <Heading as="h4" my={4} fontSize={26}>Cantype</Heading>
                        <Text>Typing test website</Text>
                    </Box>
                    <Box
                        bg="whiteAlpha.500"
                        borderRadius="xl"
                        w="19rem"
                        p={4}
                        mb="40px"
                    >
                        <Box p={4} minH="180px" borderRadius="xl"></Box>
                        <Heading as="h4" my={4} fontSize={26}>Firegram</Heading>
                        <Text>CRUD Photo Gallery</Text>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default Projects;
