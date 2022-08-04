import { Box, Heading, IconButton, Link, Stack } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaDiscord } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            py={20}
            alignItems={{ base: "center", lg: "start" }}
        >
            <Heading fontSize="3xl">Contacts</Heading>
            <Stack direction="row" my={5} shouldWrapChildren spacing={4}>
                <Link href="https://www.facebook.com/Ltwoz98k/" target="_blank">
                    <IconButton
                        icon={<FaFacebook size={20} />}
                        isRound
                        aria-label="Facebook icon"
                        h={12}
                        w={12}
                    />
                </Link>
                <Link href="mailto:warrapat.cho@gmail.com" target="_blank">
                    <IconButton
                        icon={<GrMail size={20} />}
                        isRound
                        aria-label="Email icon"
                        h={12}
                        w={12}
                    />
                </Link>
                <Link
                    href="https://discordapp.com/users/406803233466613780/"
                    target="_blank"
                >
                    <IconButton
                        icon={<FaDiscord size={20} />}
                        isRound
                        aria-label="Discord icon"
                        h={12}
                        w={12}
                    />
                </Link>
                <Link href="https://github.com/Ltwoz" target="_blank">
                    <IconButton
                        icon={<FaGithub size={20} />}
                        isRound
                        aria-label="Github icon"
                        h={12}
                        w={12}
                    />
                </Link>
            </Stack>
        </Box>
    );
};

export default Contact;
