import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import Layout from "../layouts/Layout";

const Repos = [
    {
        title: "Cantype",
        description: "Typing test website",
        href: "https://github.com/Ltwoz/cantype/",
        img: "https://github.com/Ltwoz/next-portfolio/raw/main/assets/img/wozbot.png",
        language: "JavaScript React",
    },
    {
        title: "Firegram",
        description: "CRUD Photo Gallery",
        href: "https://github.com/Ltwoz/firegram/",
        img: "https://github.com/Ltwoz/next-portfolio/raw/main/assets/img/wozbot.png",
        language: "JavaScript React",
    },
    {
        title: "URL Shortener",
        description: "Url shortener for shorten url",
        href: "https://github.com/Ltwoz/url-shortener-ejs/",
        img: "https://github.com/Ltwoz/next-portfolio/raw/main/assets/img/wozbot.png",
        language: "Node.JS Express MongoDB",
    },
    {
        title: "Wozbot Valorant",
        description: "Discord Bot Valorant store check",
        href: "https://github.com/Ltwoz/woz-bot-valorant/",
        img: "https://github.com/Ltwoz/next-portfolio/raw/main/assets/img/wozbot.png",
        language: "Python",
    },
];

const Projects = () => {
    return (
        <Layout>
            <Container p={0} maxW="650px" pt="100px" >
                <Heading as="h3" fontSize={30} mb={6} textAlign={{ base: "center", md: "start" }} >
                    Projects
                </Heading>
                <Box
                    display="flex"
                    justifyContent={{ base: "center", md: "space-between"}}
                    flexWrap="wrap"
                    mt={9}
                >
                    {Repos?.map((data, idx) => (
                        <Box
                            bg="whiteAlpha.500"
                            borderRadius="xl"
                            w="19rem"
                            p={4}
                            mb="40px"
                            key={idx}
                        >
                            <Box p={4} minH="200px" borderRadius="xl" bgImg={data.img} bgPos="center" bgSize="cover">
                                {/* <Image 
                                    src={data.img}
                                    alt={data.title}
                                    width="100%"
                                    height="100%"
                                /> */}
                            </Box>
                            <Heading as="h4" my={4} fontSize={26}>
                                {data.title}
                            </Heading>
                            <Text fontWeight="bold" opacity={0.6} mb={4}>
                                {data.description}
                            </Text>
                            <Flex justify="flex-end">
                                <a
                                    href={data.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button
                                        colorScheme="blackAlpha"
                                        borderRadius="full"
                                    >
                                        Check out
                                    </Button>
                                </a>
                            </Flex>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Layout>
    );
};

export default Projects;
