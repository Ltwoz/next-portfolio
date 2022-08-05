import { Box, Heading } from "@chakra-ui/react";
import Paragraph from "./Paragraph";

const About = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            py={20}
            alignItems={{ base: "center", lg: "start" }}
        >
            <Heading fontSize="3xl">About</Heading>
            <Paragraph>
                Hi there, I&apos;m currently study about 
            </Paragraph>
        </Box>
    );
};

export default About;
