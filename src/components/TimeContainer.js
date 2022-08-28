import Countdown from 'react-countdown'
import { Box } from '@chakra-ui/react'

const TimeContainer = () => {
  const WhenComplete = () => <h3>Happening Now!!!</h3>

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <WhenComplete />
    } else {
      // Render a countdown
      return (
        <Box>
          <span>{days} Days </span>
          <span>{hours} Hours </span>
          {minutes} Min <span></span>
          {seconds} Sec <span></span>
        </Box>
      )
    }
  }
  return (
    <Box fontSize={{ base: '0.85rem', sm: '1rem' }}>
      <Countdown date={'2022-09-14T01:02:03'} renderer={renderer} />
    </Box>
  )
}
export default TimeContainer
