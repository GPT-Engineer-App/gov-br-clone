import React from "react";
import { Box, Container, VStack, HStack, Text, Image, IconButton, Link, Input, Button, Flex, Spacer, Heading } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl">
          <HStack justifyContent="space-between">
            <HStack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb3YlMjBsb2dvfGVufDB8fHx8MTcxNTcxMjQzNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Gov Logo" boxSize="50px" />
              <Heading size="md">Portal Gov</Heading>
            </HStack>
            <HStack spacing={4}>
              <Link href="#">Acessibilidade</Link>
              <Link href="#">Mapa do Site</Link>
              <Link href="#">Contato</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Banner */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Heading size="lg">Bem-vindo ao Portal Gov</Heading>
            <Text fontSize="lg">Seu ponto de acesso a serviços e informações do governo.</Text>
            <HStack spacing={2}>
              <Input placeholder="Buscar no portal" size="lg" />
              <IconButton aria-label="Search" icon={<FaSearch />} size="lg" />
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={10}>
        <VStack spacing={10}>
          {/* Section 1 */}
          <Box w="100%" bg="white" p={5} shadow="md" borderWidth="1px">
            <Heading size="md" mb={4}>
              Notícias
            </Heading>
            <HStack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXdzJTIwaW1hZ2UlMjAxfGVufDB8fHx8MTcxNTcxMjQzNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="News 1" boxSize="150px" />
              <Text>Últimas notícias e atualizações do governo.</Text>
            </HStack>
          </Box>

          {/* Section 2 */}
          <Box w="100%" bg="white" p={5} shadow="md" borderWidth="1px">
            <Heading size="md" mb={4}>
              Serviços
            </Heading>
            <HStack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJ2aWNlcyUyMGltYWdlfGVufDB8fHx8MTcxNTcxMjQzNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Services" boxSize="150px" />
              <Text>Encontre serviços públicos disponíveis para você.</Text>
            </HStack>
          </Box>

          {/* Section 3 */}
          <Box w="100%" bg="white" p={5} shadow="md" borderWidth="1px">
            <Heading size="md" mb={4}>
              Transparência
            </Heading>
            <HStack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1694451353341-4d8c9c86cc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVuY3klMjBpbWFnZXxlbnwwfHx8fDE3MTU3MTI0MzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Transparency" boxSize="150px" />
              <Text>Acesse informações sobre a transparência do governo.</Text>
            </HStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 Portal Gov. Todos os direitos reservados.</Text>
            <Spacer />
            <HStack spacing={4}>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
              <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
              <IconButton aria-label="YouTube" icon={<FaYoutube />} size="lg" />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
