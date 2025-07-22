import { Box } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface Props{
    children : ReactNode
}

const BookCardContainer = ({children}:Props) => {
  return (
    <Box gap ="2" borderRadius={10} overflow="hidden">
        {children}
    </Box>
  )
}

export default BookCardContainer
