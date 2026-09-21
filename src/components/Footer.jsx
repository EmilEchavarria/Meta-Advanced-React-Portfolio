import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box backgroundColor="#18181b">
    <Flex
      margin="0 auto"
      px={12}
      py={4}
      color="white"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="1024px"
      flexWrap="wrap"
      gap={2}
    >
      <Text fontSize="sm">
        Emil Echavarria •{" "}
        <Link href="https://emilechavarria.vercel.app" isExternal color="teal.300">
          Portfolio
        </Link>
      </Text>
      <Text fontSize="sm">
        © {new Date().getFullYear()} Coursera Meta Advanced React Portfolio
      </Text>
    </Flex>
  </Box>
);

export default Footer;
