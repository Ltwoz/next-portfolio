import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger,
} from "@chakra-ui/react";
import axios from "axios";
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
                <Box>{data.name}</Box>
            </PopoverTrigger>
            <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                    {data.full_name}
                </PopoverHeader>
                <PopoverArrow />
                <PopoverBody>
                    {data.description}
                </PopoverBody>
                <PopoverFooter
                    border="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
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
            {Repos.map((item, idx) => (
                <WalkthroughPopover data={item} key={idx} />
            ))}
        </Layout>
    );
};

export default Projects;
