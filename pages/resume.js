import { Container } from "@chakra-ui/react";
import React from "react";
import SinglePagePdf from "../components/SinglePagePdf";
import Layout from "../layouts/Layout";
import resumePDF from "../assets/Warrapat Resume.pdf";
// import { resumeBase64pdf } from "../assets/resumeBase64pdf";

const Resume = () => {

    return (
        <Layout>
            <Container p={0} maxW="650px" pt="100px">
                {/* <SinglePagePdf pdf={resumePDF} /> */}
            </Container>
        </Layout>
    );
};

export default Resume;
