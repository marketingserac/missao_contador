import { Box, Text, Flex, Stack, Image, Button } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      maxH={["1050px", "1120px", "1500px", "690px", "680px", "1300px"]}
      pb={["0%", "15%", "0", "0", "0", "0%"]}
      pt={["2%", "15%", "3%", "2%"]}
      backgroundImage="url('assets/images/bg_header.svg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment={[
        "initial",
        "initial",
        "initial",
        "inherit",
        "fixed",
      ]}
    >
      <Box
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        justifyItems="center"
        paddingX="7%"
      >
        <Flex
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          justifyItems="center"
          color="white"
          w="100%"
          direction={["column", "column", "column", "row"]}
        >
          <Flex
            w="100%"
            flex={1}
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            justifyItems="center"
            direction={"column"}
            pb={["0", "0", "0", "0", "0", "2%"]}
            ml={["0", "0", "0", "0", "8%", "10%"]}
          >
            {" "}
            <Box
              display={"flex"}
              justifyContent="center"
              justifyItems="center"
              alignItems="center"
              alignContent="center"
            >
              <Image
                alt="Logo 00J"
                src="assets/images/logo.png"
                w={["400px", "400px", "400px", "400px", "400px", "20vw"]}
                ml={["0", "0", "0", "2%"]}
              />
            </Box>
            <Box
              w={["auto", "auto", "60%", "60%", "100%"]}
              mt="2%"
              textAlign={["center", "center", "center", "left"]}
            >
              <Text
                fontFamily="JosefinMedio"
                fontSize={["2rem", "2rem", "2rem", "2rem", "2.5rem", "3.5vw"]}
                lineHeight={["35px", "35px", "35px", "35px", "35px", "3.7vw"]}
              >
                Você é{" "}
                <Box as="span" fontFamily={"JosefinBold"}>
                  {" "}
                  contador{" "}
                </Box>
                e precisa aumentar
                <Box as="span" fontFamily={"JosefinBold"}>
                  {" "}
                  seu faturamento?
                </Box>
              </Text>
              <Text
                fontSize={[
                  "1.25rem",
                  "1.25rem",
                  "1.25rem",
                  "1.25rem",
                  "1.25rem",
                  "1.6vw",
                ]}
                lineHeight={["20px", "20px", "20px", "20px", "20px", "1.4vw"]}
                pt="2%"
              >
                Descubra as habilidades mais valiosas da gestão de negócios com
                um dos contadores mais influentes do país!
              </Text>
            </Box>
            <Box
              pt="2%"
              pb="2%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              justifyItems="center"
              alignItems="center"
              alignContent="center"
              textAlign="center"
            >
              <Box mt="20px">
                <Text fontSize={"1.8rem"} fontFamily={"JosefinBold"}>
                  Inscreva-se já:
                </Text>
              </Box>
              <Box fontFamily="JosefinMedio" mt="3px">
                <Button
                  bg="#ed0a0a"
                  pt="3%"
                  as="a"
                  href="/pagamento"
                  target="_blank"
                  h={["80px"]}
                  w={["170px"]}
                  _hover={{
                    backgroundColor: "black",
                  }}
                  _focus={{
                    focus: "none",
                    border: "none",
                    backgroundColor: "black",
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    alignContent="center"
                    textAlign="center"
                  >
                    <Text fontSize={["1.5rem"]}>QUERO</Text>

                    <Text fontSize={["1.5rem"]}>PARTICIPAR</Text>
                  </Box>
                </Button>
              </Box>
              <Text
                fontFamily="JosefinMedio"
                lineHeight={["25px", "25px", "25px", "25px", "25px", "1.4vw"]}
                w={["350px", "350px", "350px", "350px", "350px", "14vw"]}
                pt="10%"
                mt={["1px", "1px", "1px", "20px"]}
              >
                <Text
                  fontSize={[
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "2vw",
                  ]}
                  lineHeight={["40px", "40px", "40px", "40px", "40px", "2.2vw"]}
                >
                  20 e 21/05 São Paulo - SP
                </Text>

                {/* <Text
                  fontSize={[
                    "1.7rem",
                    "1.7rem",
                    "1.7rem",
                    "1.7rem",
                    "1.7rem",
                    "1.1vw",
                  ]}
                  mt="-8%"
                >
                  São Paulo - SP
                </Text> */}
                <Text
                  fontSize={[
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1.5rem",
                    "1vw",
                  ]}
                  fontFamily="JosefinLight"
                >
                  (PRESENCIAL)
                </Text>
              </Text>
            </Box>
          </Flex>
          <Flex
            flex={1}
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            justifyItems="center"
          >
            {" "}
            <Box mt={["0%", "3%", "1%", "4%", "-3%", "0.4%"]}>
              <Image
                alt="Jhonny"
                src="assets/images/00J.png"
                maxW={["280px", "357px", "350px", "400px", "400px", "30vw"]}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
