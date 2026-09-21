import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit.js";

const ContactMeSection = ({ onAlert }) => {
  const { isLoading, submit } = useSubmit();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: async (values, actions) => {
      const result = await submit("https://example.com/contactme", values);
      if (result?.type === "success") {
        onAlert?.("success", "All good!", result.message);
        actions.resetForm();
      } else {
        onAlert?.(
          "error",
          "Oops!",
          result?.message || "Something went wrong, please try again later!"
        );
      }
    },
  });

  return (
    <Box
      id="contactme-section"
      scrollMarginTop="72px"
      as="section"
      backgroundColor="#512DA8"
      py={16}
      px={{ base: 4, md: 16 }}
    >
      <Box maxWidth="1280px" margin="0 auto" color="white">
        <Heading as="h1" size="xl" mb={8}>
          Contact me
        </Heading>
        <Box
          as="form"
          onSubmit={formik.handleSubmit}
          maxWidth="720px"
          backgroundColor="white"
          color="gray.800"
          borderRadius="xl"
          p={{ base: 6, md: 8 }}
          boxShadow="lg"
        >
          <VStack spacing={5} align="stretch">
            <FormControl
              isInvalid={formik.touched.firstName && !!formik.errors.firstName}
            >
              <FormLabel htmlFor="firstName">Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                {...formik.getFieldProps("firstName")}
              />
              <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.email && !!formik.errors.email}
            >
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="type">Type of enquiry</FormLabel>
              <Select id="type" name="type" {...formik.getFieldProps("type")}>
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">
                  Open source consultancy session
                </option>
                <option value="other">Other</option>
              </Select>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.comment && !!formik.errors.comment}
            >
              <FormLabel htmlFor="comment">Your message</FormLabel>
              <Textarea
                id="comment"
                name="comment"
                height={250}
                {...formik.getFieldProps("comment")}
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="purple"
              width="full"
              isLoading={isLoading}
              loadingText="Submitting"
            >
              Submit
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMeSection;
