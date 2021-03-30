import { Anchor, Box, Heading, Paragraph } from 'grommet'
import CONSTANTS from '../CONSTANTS'


console.log(CONSTANTS)

export default function Home() {
  return (
    <Box align="center" margin="large">
      <Heading>PrecisionRx</Heading>
      <Paragraph>
        Find out more at{' '}
        <Anchor href="https://v2.grommet.io/">https://v2.grommet.io/</Anchor>
      </Paragraph>

      <Paragraph>
        Dark Green
      </Paragraph>

    </Box>
  )
}
