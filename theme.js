import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    breakpoints: {
        xs: "320px",
        sm: "600px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    },

    textStyles: {
        h1: {
            fontSize: "27px",
            fontWeight: "700"
        }
    }
})

export default theme
