import { Badge } from "@chakra-ui/react"

interface Props{
    score: number,
}

const CriticScore = ({score}:Props) => {
    let color = score > 75? "green": score > 50? "yellow":"";
  return (
    <Badge colorPalette={color} width={10} fontSize="15px" padding={2} borderRadius="5px">{score}</Badge>
  )
}

export default CriticScore
