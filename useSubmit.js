import { useState } from "react";

/**
 * Simulated form submit hook (course-style).
 * Resolves after a short delay with a success response.
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const successResponse = {
        type: "success",
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      };
      setResponse(successResponse);
      return successResponse;
    } catch (error) {
      const errorResponse = {
        type: "error",
        message: "Something went wrong, please try again later!",
      };
      setResponse(errorResponse);
      return errorResponse;
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
