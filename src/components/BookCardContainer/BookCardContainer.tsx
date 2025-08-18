import { Box } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface Props{
    children : ReactNode
}

const BookCardContainer = ({children}:Props) => {
  return (
    <Box  _hover={{
          transform: 'scale(1.03)',
          transition: 'transform 0.15s ease-in'
        }} gap ="2" borderRadius={10} overflow="hidden">
        {children}
    </Box>
  )
}

export default BookCardContainer
