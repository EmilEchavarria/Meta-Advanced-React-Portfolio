import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card.jsx";

const projects = [
  {
    title: "OneDigs",
    description:
      "A property discovery platform that helps users find and compare housing options with rich filters, maps, and saved favorites.",
    getImageSrc: () =>
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    url: "https://emilechavarria.vercel.app",
  },
  {
    title: "IntelecMed",
    description:
      "Telemedicine dashboard for clinics to manage appointments, patient records, and secure messaging between doctors and patients.",
    getImageSrc: () =>
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    url: "https://emilechavarria.vercel.app",
  },
  {
    title: "AgroGestor",
    description:
      "Agricultural management app for tracking crops, inventory, and harvest schedules with clear analytics for farm operators.",
    getImageSrc: () =>
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
    url: "https://emilechavarria.vercel.app",
  },
  {
    title: "DashBite",
    description:
      "Restaurant analytics dashboard with live orders, revenue charts, and menu performance insights for busy kitchens.",
    getImageSrc: () =>
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    url: "https://emilechavarria.vercel.app",
  },
];

const ProjectsSection = () => (
  <Box
    id="projects-section"
    as="section"
    position="relative"
    backgroundColor="#14532d"
    py={16}
    px={{ base: 4, md: 16 }}
    scrollMarginTop="72px"
  >
    <Box id="projects" position="absolute" aria-hidden="true" />
    <Box maxWidth="1280px" margin="0 auto">
      <Heading as="h1" size="xl" color="white" mb={10}>
        Featured Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </SimpleGrid>
    </Box>
  </Box>
);

export default ProjectsSection;
