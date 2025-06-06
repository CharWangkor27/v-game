import { Box } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface Props{
    children : ReactNode
}

const GameCardContainer = ({children}:Props) => {
  return (
    <Box gap ="2" borderRadius={10} overflow="hidden" width="300px">
        {children}
    </Box>
  )
}

export default GameCardContainer
