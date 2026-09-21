import { Avatar, Heading, VStack, Text, Box } from "@chakra-ui/react";

const greeting = "Hello, I am Emil Echavarria!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <Box
    id="landing"
    scrollMarginTop="72px"
    as="section"
    backgroundColor="#512DA8"
    minHeight="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    pt={20}
  >
    <VStack spacing={6} textAlign="center" color="white" px={4}>
      <Avatar
        size="2xl"
        name="Emil Echavarria"
        src="https://i.pravatar.cc/150?img=7"
        showBorder
        borderColor="white"
      />
      <Heading as="h1" size="md" fontWeight="medium">
        {greeting}
      </Heading>
      <VStack spacing={2}>
        <Heading as="h2" size="2xl">
          {bio1}
        </Heading>
        <Heading as="h2" size="2xl">
          {bio2}
        </Heading>
      </VStack>
      <Text maxW="md" opacity={0.9} fontSize="lg">
        Building polished web experiences with React, Chakra UI, and modern
        JavaScript. Explore my projects below or get in touch.
      </Text>
    </VStack>
  </Box>
);

export default LandingSection;
