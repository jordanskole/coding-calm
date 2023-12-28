import { Center, Box, Heading, Stack, Container, Flex, Spacer, Button, ButtonGroup } from "@chakra-ui/react"
import { Link } from '@chakra-ui/next-js'

export default function Home() {
  return (
    <Stack direction={"column"}>
      <Container maxW={"8xl"}>
        <Flex direction={"row"}>
          <Stack py={4} direction={"row"} spacing={4}>
            <Button variant={"link"}>Articles</Button>
            <Button variant={"link"}>Courses</Button>
          </Stack>
          <Spacer />
          <Stack py={4} direction={"row"} spacing={4}>
            <Button variant={"link"}>Login</Button>
          </Stack>
        </Flex>
      </Container>
      <Box bg="teal">
        <Container maxW={"8xl"}>
          <Center h="50vh">
            <Heading>Learn to code. Have fun.</Heading>
          </Center>
        </Container>
      </Box>
    </Stack>
  )
}

