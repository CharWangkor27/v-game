

import {IconButton} from "@chakra-ui/react"

import { LuMoon, LuSun } from "react-icons/lu"
import { useColorMode } from "../ui/color-mode"

const Theme = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
      <IconButton onClick={toggleColorMode} variant='outline' size="sm">
        {colorMode === "dark" ? <LuSun /> : <LuMoon />}
      </IconButton>

  )

}

export default Theme
