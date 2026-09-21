import { Box, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react";
import { useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import LandingSection from "./components/LandingSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactMeSection from "./components/ContactMeSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = useCallback((status, title, description) => {
    setAlert({ status, title, description });
  }, []);

  const dismissAlert = useCallback(() => setAlert(null), []);

  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <main>
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection onAlert={showAlert} />
      </main>
      <Footer />

      {alert && (
        <Alert
          status={alert.status}
          variant="solid"
          position="fixed"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          width={{ base: "90%", md: "auto" }}
          maxW="lg"
          borderRadius="md"
          zIndex={2000}
          boxShadow="lg"
        >
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription display="block">{alert.description}</AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={dismissAlert}
          />
        </Alert>
      )}
    </Box>
  );
}

export default App;
