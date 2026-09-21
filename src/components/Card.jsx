import { Box, Heading, HStack, Image, Text, VStack, Link } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ title, description, imageSrc, url }) => (
  <Box
    backgroundColor="white"
    borderRadius="xl"
    overflow="hidden"
    boxShadow="md"
    _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
    transition="all 0.2s ease"
    height="100%"
  >
    <Image
      src={imageSrc}
      alt={title}
      objectFit="cover"
      width="100%"
      height="200px"
    />
    <VStack align="stretch" spacing={3} p={5}>
      <Heading as="h3" size="md" color="gray.800">
        {title}
      </Heading>
      <Text color="gray.600" fontSize="sm" noOfLines={4}>
        {description}
      </Text>
      {url ? (
        <Link
          href={url}
          isExternal
          color="teal.600"
          fontWeight="semibold"
          _hover={{ textDecoration: "none", color: "teal.400" }}
        >
          <HStack spacing={2}>
            <Text>See more</Text>
            <FaArrowRight />
          </HStack>
        </Link>
      ) : (
        <HStack spacing={2} color="teal.600" fontWeight="semibold">
          <Text>See more</Text>
          <FaArrowRight />
        </HStack>
      )}
    </VStack>
  </Box>
);

export default Card;
