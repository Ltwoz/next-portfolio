import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const fonts = {
    heading: "'M PLUS Rounded 1c'",
    body: "'M PLUS Rounded 1c'"
}

const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
}

const theme = extendTheme({ config, fonts, styles })
export default theme;