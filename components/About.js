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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                a illo praesentium delectus neque velit! Iusto quis adipisci
                reprehenderit non!
            </Paragraph>
        </Box>
    );
};

export default About;
