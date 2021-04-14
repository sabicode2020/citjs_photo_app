import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function Home() {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Heading as="h1" size="lg">
        JamShots
      </Heading>
      <Heading as="h2" size="md">
        Create and share photo galleries. Fast.
      </Heading>
    </Flex>
  );
}

export default Home;
