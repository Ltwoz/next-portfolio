import { Container } from "@chakra-ui/react";
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
                pt="150px"
            >
                <Card />
                <About />
                <Contact />
                <Footer />
            </Container>
        </Layout>
    );
}
