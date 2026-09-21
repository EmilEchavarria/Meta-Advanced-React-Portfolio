import { Box, HStack, Link } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const socials = [
  {
    icon: FaEnvelope,
    url: "mailto:emilechavarria2005@gmail.com",
    label: "Email",
  },
  {
    icon: FaGithub,
    url: "https://github.com/EmilEchavarria",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/emil-echavarria",
    label: "LinkedIn",
  },
  {
    icon: FaGlobe,
    url: "https://emilechavarria.vercel.app",
    label: "Portfolio",
  },
];

const Header = () => {
  const [translateY, setTranslateY] = useState(0);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevScrollY.current && currentY > 80) {
        // scrolling down — hide header
        setTranslateY(-200);
      } else {
        // scrolling up — show header
        setTranslateY(0);
      }
      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${translateY}px)`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, md: 16 }}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav aria-label="Social links">
            <HStack spacing={5}>
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.url}
                    isExternal={social.url.startsWith("http")}
                    aria-label={social.label}
                    fontSize="xl"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </HStack>
          </nav>
          <nav aria-label="Page sections">
            <HStack spacing={{ base: 4, md: 8 }}>
              <Link
                href="#landing"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("landing")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                _hover={{ textDecoration: "none", color: "teal.300" }}
              >
                Home
              </Link>
              <Link
                href="#projects-section"
                onClick={handleClick("projects")}
                _hover={{ textDecoration: "none", color: "teal.300" }}
              >
                Projects
              </Link>
              <Link
                href="#contactme-section"
                onClick={handleClick("contactme")}
                _hover={{ textDecoration: "none", color: "teal.300" }}
              >
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
