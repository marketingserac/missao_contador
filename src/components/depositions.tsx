import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  AspectRatio,
  Text,
} from "@chakra-ui/react";

export function Depoimentos() {
  return (
    <Flex
      paddingX="7%"
      id="beneficios"
      direction="column"
      maxW="100%"
      minH={["100vh", "100vh", "1000px", "500px", "100vh", "50vh"]}
      pt={["8%", "8%", "5%", "1%", "1%", "2%"]}
      pb="5%"
      backgroundImage="url('assets/images/bg-video.svg')"
      backgroundPosition={["left", "left", "center"]}
      backgroundSize="cover"
      backgroundAttachment={[
        "initial",
        "initial",
        "initial",
        "inherit",
        "fixed",
      ]}
      backgroundRepeat="no-repeat"
      display="flex"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
    >
      <Box
        display="flex"
        textAlign="center"
        alignContent="center"
        justifyContent="center"
      >
        <Heading
          pt={["3%", "3%", "3%"]}
          pb="1%"
          color="white"
          fontSize={["2.8rem", "2.8rem", "3.5rem", "4.5rem", "5.1vw"]}
          w={["300px", "auto", "700px", "800px", "90vw"]}
        >
          Depoimentos
        </Heading>
      </Box>

      <Box>
        <SimpleGrid
          flex="1"
          spacingX="40px"
          spacingY="40px"
          pl="1%"
          pr="1%"
          pt="1%"
          pb="2%"
          columns={{ sm: 2, md: 2, lg: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Box
              bg="transparent"
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
              justifyItems="center"
              alignContent="center"
              alignItems="center"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <AspectRatio
                  w={["320px", "25vw"]}
                  h={["200px", "14.3vw"]}
                  ratio={1}
                >
                  <iframe
                    src="https://www.youtube.com/embed/rISxNqhYL8I"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </AspectRatio>
              </Box>
              <Text
                fontFamily={"JosefinMedio"}
                color="white"
                textAlign={"center"}
                mt="15px"
                fontSize={"1.3rem"}
              >
                Huedson Neto <br />
                -Sócio-Diretor AUTOMATIZE
              </Text>
            </Box>
          </Box>

          <Box>
            <Box
              bg="transparent"
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
              justifyItems="center"
              alignContent="center"
              alignItems="center"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <AspectRatio
                  w={["320px", "25vw"]}
                  h={["200px", "14.3vw"]}
                  ratio={1}
                >
                  <iframe
                    src="https://www.youtube.com/embed/sRWqXJ5z5O8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </AspectRatio>
              </Box>
              <Text
                fontFamily={"JosefinMedio"}
                color="white"
                textAlign={"center"}
                mt="15px"
                fontSize={"1.3rem"}
              >
                Eduardo Diniz <br />
                -Sócio-Diretor Diniz&Diniz
              </Text>
            </Box>
          </Box>

          <Box>
            <Box
              bg="transparent"
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
              justifyItems="center"
              alignContent="center"
              alignItems="center"
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <AspectRatio
                  w={["320px", "25vw"]}
                  h={["200px", "14.3vw"]}
                  ratio={1}
                >
                  <iframe
                    src="https://www.youtube.com/embed/IjuZSiP-TAo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </AspectRatio>
              </Box>
              <Text
                fontFamily={"JosefinMedio"}
                color="white"
                textAlign={"center"}
                mt="15px"
                fontSize={"1.3rem"}
              >
                Kennedy Lima <br />- Contador
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
