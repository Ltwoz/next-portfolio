import "../styles/globals.css";
import Chakra from "../components/Chakra";
import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps }) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Component {...pageProps} />
        </Chakra>
    );
}

export default MyApp;
