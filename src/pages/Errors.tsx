import { NavBar } from "../components/navbar/NavBar"
import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const Errors = () => {
    const error = useRouteError()
  return (
    <Box padding={5}>
    <NavBar/>
      <Heading>Sorry....</Heading>
      <Text>{isRouteErrorResponse(error)?"This page doesn't exist":
        "An unexpected error occured"}
      </Text>
    </Box>
  )
}

export default Errors
