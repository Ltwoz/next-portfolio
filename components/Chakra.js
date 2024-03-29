import {
    ChakraProvider,
    cookieStorageManager,
    localStorageManager,
} from "@chakra-ui/react";
import theme from "../lib/theme";

export default function Chakra({ children, cookies }) {
    const colorModeManager =
        typeof cookies === "string"
            ? cookieStorageManager(cookies)
            : localStorageManager;

    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    );
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            cookies: req.headers.cookie ?? "",
        }
    }
}
