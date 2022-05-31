import { Box, Heading, Flex, Stack, Image } from "@chakra-ui/react";

export function Preco() {
  return (
    <Flex
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      pb={["5%", "5%", "5%"]}
      pt={["5%"]}
      backgroundImage="url('assets/images/bg_icons.svg')"
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
      <Box w="100%" h="100%" display="flex" flexDirection="column">
        <Stack
          spacing={1}
          h="100%"
          color="white"
          display="flex"
          direction={["column", "column", "column"]}
          paddingX="5%"
        >
          <Box textAlign={["center", "center", "center", "left"]}>
            <Heading
              fontSize={["3rem", "3rem", "3rem", "4rem"]}
              fontFamily="JosefinRegular"
            >
              Valor da Imersão:
            </Heading>
          </Box>

          <Stack
            direction="column"
            flex="1"
            pt="3%"
            display="flex"
            alignItems="center"
            alignContent="center"
            color="white"
            fontSize="24px"
            textAlign={["center", "center", "center", "left"]}
          >
            <Box>
              <Image
                alt="valor"
                src="assets/images/preco.svg"
                w="600px"
                boxShadow="lg"
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
