import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import pfp from "../assets/img/mypic.jpg"

const Card = () => {
    return (
        <Box
            as="card"
            display="flex"
            flexDirection={{ base: "column-reverse", lg: "row" }}
            alignItems={{ base: "center", lg: "start" }}
        >
            <Box flexGrow={1} textAlign={{ base: "center", lg: "start" }}>
                <Text fontSize="2xl" >This is me</Text>
                <Heading as="h2" fontSize="4xl" >
                    Warrapat Choedchusakunrat
                </Heading>
                <Text></Text>
            </Box>
            {/* <Box
                flexShrink={0}
                my={{ base: 4, lg: 0 }}
                ml={{ lg: 4 }}
                textAlign="center"
            >
                <Box
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    w="100px"
                    h="100px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden"
                >
                    <Image
                        src={pfp}
                        alt="Profile image"
                        borderRadius="full"
                        width="100%"
                        height="100%"
                    />
                </Box>
            </Box> */}
        </Box>
    );
};

export default Card;
