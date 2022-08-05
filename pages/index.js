import { Container, Box } from "@chakra-ui/react";
import About from "../components/About";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Layout from "../layouts/Layout";

export default function Home() {
    return (
        <Layout>
            <Container
                p={0}
                maxW='650px'
                h="100%"
                display="flex"
                flexDirection="column"
                pt="100px"
                justifyContent="space-between"
            >
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg="whiteAlpha.500"
                    css={{ backdropFilter: "blur(10px)" }}
                >
                Hello, I&apos;m indie developer from Thailand!
                </Box>
                <Card />
                {/* <About /> */}
                <Contact />
                <Footer />
            </Container>
        </Layout>
    );
}
