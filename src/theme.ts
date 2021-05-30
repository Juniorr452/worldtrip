import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  colors: {
    brand: {
      500: "#FFBA08",
      300: "#FFDA79"
    },
    gray: {
      700: "#47585B",
      500: "#999999",
      300: "#DADADA",
      50: "#F5F8FA"
    }
  }
})