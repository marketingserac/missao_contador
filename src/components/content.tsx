import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Item } from "react-photoswipe-gallery";

export function Conteudo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedCard, setSelectedCard] = useState({
    title: "",
    description: <ul></ul>,
    image: "",
  });

  const cards = [
    {
      title:
        "Conheça a trajetória de uma das maiores empresas de contabilidade do país!",
      description: (
        <ul>
          <li>
            Saiba o que foi feito na trajetória do SERAC e que como isso pode
            ser balizado para outros negócios;
          </li>
          <li>
            Como tudo começou e o que foi feito para atingir mais de 2.500
            clientes recorrentes em todo o Brasil, sendo vários deles grandes
            referências;
          </li>
          <li>
            Cultura: implantação de uma cultura proativa baseada em marcas
            internacionais;
          </li>
          <li>
            Criação de Missão, Visão e Valores de uma empresa em mercado
            tradicional e os impactos positivos.
          </li>
        </ul>
      ),
      image: "assets/images/icon_popup_historia.svg",
    },
    {
      title: "Entenda a importância de criar um time incrível!",
      description: (
        <ul>
          <li>Pessoas, seu maior ativo:</li>
          <li>Importância da gestão de propósitos, visão e valores;</li>
          <li>Employer Branding e atrair, engajar, e reter talentos;</li>
          <li>Employee Value Proposition: como colaboradores;</li>
          <li>Construindo times de sucesso e alta performance.</li>
        </ul>
      ),
      image: "assets/images/icon_gestao.svg",
    },
    {
      title:
        "Conheça as ferramentas e processos mais indicados para o seu negócio!",
      description: (
        <ul>
          <li>Remuneração Estratégica aliada à missão e visão da Empresa;</li>
          <li>Gestão Estratégica de Times de Alta Performance;</li>
          <li>Programa de Desenvolvimento de Líderes;</li>
          <li>KPI’s na Gestão de Pessoal (Indicadores);</li>
          <li>Principais processos indicados para a sua contabilidade;</li>
          <li>
            Priorização, implantação e monitoramento de processos contábeis;
          </li>
          <li>
            Ferramentas de controle de atividades e tarefas voltadas para
            contabilidade.
          </li>
        </ul>
      ),
      image: "assets/images/icon_gestao2.svg",
    },
    {
      title: "Acompanhe o crescimento da sua empresa com inovação e segurança!",
      description: (
        <ul>
          <li>Segurança da Informação;</li>
          <li>Sistemas;</li>
          <li>Infraestrutura;</li>
          <li>Inovação.</li>
        </ul>
      ),
      image: "assets/images/icon_popup_lgpd.svg",
    },
    {
      title: "Domine técnicas infalíveis de Marketing Digital!",
      description: (
        <ul>
          <li>Branding: como ter uma marca poderosa;</li>
          <li>Estratégias de Marketing Digital;</li>
          <li>Funil de Vendas;</li>
          <li>Métricas;</li>
          <li>Redes sociais e tráfego pago.</li>
        </ul>
      ),
      image: "assets/images/icon_popup_MKT.svg",
    },
    {
      title: "Como ter um poderoso exército de vendas!",
      description: (
        <ul>
          <li>Como vender e quebrar um paradigma em um mercado tradicional;</li>
          <li>Expansão, escalabilidade e notoriedade da marca;</li>
          <li>Como expandir o seu negócio começando do zero;</li>
          <li>Como montar uma equipe de vendas comissões e prêmios;</li>
          <li>
            Ferramentas utilizadas no controle e na gestão das vendas: Aprenda a
            utilizar um CRM da melhor forma;
          </li>
          <li>
            Networking: aprendendo a fazer networking de forma fácil e com
            retorno garantido;
          </li>
          <li>
            Experiência do Cliente: aprenda o CX de um mercado tradicional;
          </li>
          <li>Retenção de Clientes: como aumentar o LTV de seu cliente;</li>
          <li>Vendas pelas redes sociais e criação de autoridade;</li>
          <li>Segmentação e foco de vendas;</li>
          <li>Quais diferenciais trazer para um mercado tradicional.</li>
        </ul>
      ),
      image: "assets/images/icon_popup_vendas.svg",
    },
  ];

  return (
    <Flex
      id="conteudo"
      direction="column"
      maxW="100%"
      minH={["50vh", "50vh", "500px", "50vh"]}
      pt={["8%", "", "5%", "1%"]}
      pb="5%"
      backgroundImage="url('assets/images/bg-conteudo.svg')"
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
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        preserveScrollBarGap={true}
      >
        <ModalOverlay />
        <ModalContent
          backgroundColor="#680000"
          color="white"
          maxWidth="90vw"
          p="5%"
        >
          <ModalHeader
            fontFamily="JosefinMedio"
            fontSize={["2rem", "2rem", "2rem", "2rem", "2rem", "3vw"]}
            lineHeight={["30px", "30px", "30px", "30px", "30px", "3vw"]}
          >
            {selectedCard.title}
          </ModalHeader>

          <ModalBody
            pl="10%"
            fontFamily="JosefinRegular"
            fontSize={[
              "1.25rem",
              "1.25rem",
              "1.25rem",
              "1.25rem",
              "1.25rem",
              "1.6vw",
            ]}
            lineHeight={["20px", "20px", "20px", "20px", "20px", "1.4vw"]}
          >
            {selectedCard.description}{" "}
          </ModalBody>

          <ModalFooter>
            <Button
              fontSize={[
                "1.25rem",
                "1.25rem",
                "1.25rem",
                "1.25rem",
                "1.25rem",
                "1.6vw",
              ]}
              lineHeight={["20px", "20px", "20px", "20px", "20px", "1.4vw"]}
              colorScheme="black"
              backgroundColor="black"
              _hover={{ backgroundColor: "black" }}
              mr={3}
              onClick={onClose}
              p="2%"
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        display="flex"
        textAlign="center"
        alignContent="center"
        justifyContent="center"
      >
        <Heading
          pt={["3%", "3%", "3%"]}
          pb="2%"
          fontFamily="JosefinRegular"
          color="white"
          fontSize={["2rem", "2rem", "2rem", "2rem", "3rem", "3.9vw"]}
          lineHeight={["30px", "30px", "30px", "30px", "30px", "3vw"]}
          w={["300px", "auto"]}
        >
          O QUE VOCÊ IRÁ APRENDER:
        </Heading>
      </Box>

      <Box>
        <SimpleGrid
          flex="1"
          spacingX="20px"
          spacingY="40px"
          pl="1%"
          pr="1%"
          pt="3%"
          pb="2%"
          columns={{
            sm: 2,
            md: 2,
            lg: 3,
          }}
          justifyContent="center"
          alignItems="center"
        >
          {cards.map((card) => (
            <Box key={card.title}>
              <Box
                boxShadow="dark-lg"
                as="button"
                onClick={() => {
                  setSelectedCard(card);
                  onOpen();
                }}
                bg="transparent"
                width={["250px", "200px", "250px", "250px", "250px", "15vw"]}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box
                    as="img"
                    src={card.image}
                    width={[
                      "250px",
                      "200px",
                      "250px",
                      "250px",
                      "250px",
                      "15vw",
                    ]}
                  />
                </Box>
              </Box>
            </Box>
          ))}{" "}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
