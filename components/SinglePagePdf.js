import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const SinglePagePdf = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const { pdf } = props;

    return (
        <>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </>
    )
};

export default SinglePagePdf;
