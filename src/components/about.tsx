import { Box, Heading, Text, Flex, Stack } from "@chakra-ui/react";

export function About() {
  return (
    <Flex
      id="sobre"
      direction="column"
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      minH={["100vh", "100vh", "600px", "600px", "100vh", "80vh"]}
      pb={["5%", "5%", "2%"]}
      pt={["5%", "5%", "2%"]}
      backgroundImage="url('assets/images/bg_about.png')"
      backgroundPosition={["left", "left", "left", "left", "center"]}
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
          direction={["column", "column", "column", "row"]}
          paddingX={["5%", "5%", "5%", "5%", "5%", "3%"]}
        >
          <Stack
            direction="column"
            flex="1"
            paddingX={["2%", "0", "5%", "20%"]}
            display="flex"
            justifyContent="center"
            alignItems="center"
            justifyItems="center"
            alignContent="center"
            textAlign={["center", "center", "center", "center", "left"]}
          >
            <Heading
              fontSize={[
                "3.5rem",
                "3.5rem",
                "3.5rem",
                "3.5rem",
                "3.5rem",
                "5.1vw",
              ]}
            >
              Jhonny Martins
            </Heading>

            <Text
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
              lineHeight={["20px", "20px", "20px", "20px", "20px", "2vw"]}
            >
              Jhonny iniciou sua jornada trabalhando com 14 anos de idade, desde
              office boy, organizador do almoxarifado, departamento financeiro,
              auxiliar da consultoria e demais departamentos operacionais
              contábeis até se tornar diretor da empresa aos 27 anos de idade.
            </Text>

            <Text
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
              lineHeight={["20px", "20px", "20px", "20px", "20px", "2vw"]}
            >
              Possui o DNA empreendedor e acredita muito no poder de gestão de
              negócios e no empreendedorismo. Ele auxilia e direciona novos
              empresários a alcançarem o próximo nível com soluções contábeis,
              jurídicas e de gestão, impactando positivamente vidas de clientes,
              parceiros, colaboradores, amigos e familiares.
            </Text>

            <Text
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
              lineHeight={["20px", "20px", "20px", "20px", "20px", "2vw"]}
            >
              Jhonny Martins é atualmente vice-presidente do SERAC, CEO das
              empresas O MEU MEI, TEC PAD e IRRV e apresentador do canal do
              YouTube SERACROLA. É o parceiro estratégico de grandes empresários
              e personalidades da mídia, direcionando o crescimento sustentável
              de diversos o negócios.
            </Text>

            <Text
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
              lineHeight={["20px", "20px", "20px", "20px", "20px", "2vw"]}
            >
              Jhonny é contador e advogado pela PUC-SP com especialização em
              Direito do Trabalho pela Faculdade de Direito Damásio de Jesus,
              com MBA em Gestão Empresarial pela FGV-SP e MBA em Gestão
              Tributária pela USP.
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
