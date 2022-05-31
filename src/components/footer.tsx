import {
  Box,
  Icon,
  Text,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Button,
  Textarea,
  Input,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutubeSquare,
  FaWhatsapp,
} from "react-icons/fa";

import { CheckCircleIcon } from "@chakra-ui/icons";
import React, { useRef } from "react";
import axios from "axios";
import * as yup from "yup";
import { Formik, Form } from "formik";

export function Footer() {
  const validationSchema = yup.object().shape({
    nome: yup.string().required("Preencha seu nome"),
    email: yup
      .string()
      .email("Digite um email válido ")
      .required("Campo obrigatório"),
    telefone: yup
      .string()
      .min(15, "Telefone incompleto")
      .required("Campo obrigatório"),

    cidade: yup.string().required("Campo obrigatório").min(3),
    mensagem: yup.string().required("Campo obrigatório").min(5),
  });

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  return (
    <Flex
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      maxH={["1003px", "1116px", "180vh", "680px"]}
      pb="5%"
      pt="5%"
      backgroundColor="black"
    >
      <Box mt="1%" w="100%" h="100%" display="flex" flexDirection="column">
        <Stack
          spacing={1}
          h="100%"
          color="white"
          display="flex"
          direction={["column", "column", "column", "row"]}
          paddingX="5%"
        >
          <Stack
            pl={["0", "0", "0", "5%"]}
            direction="column"
            flex="0.7"
            display="flex"
            alignItems="center"
            alignContent="center"
            color="white"
            fontSize="24px"
            textAlign={["center", "center", "center", "left"]}
          >
            <Box
              direction="column"
              alignItems="center"
              alignContent="center"
              flexWrap="wrap"
              display="flex"
              w="220px"
              textAlign="left"
              fontSize="1.2rem"
              lineHeight="25px"
            >
              <Text as="a" href="/#bonus">
                Bônus exclusivo
              </Text>

              <Text as="a" href="/#video">
                Vídeo do Pitch
              </Text>

              <Text as="a" href="/#jhonnyvs007">
                Jhonny Vs 00J
              </Text>

              <Text as="a" href="/#sobre">
                Quem é Jhonny Martins
              </Text>

              <Text as="a" href="/#beneficios">
                Por que fazer parte da Missão
              </Text>

              <Text as="a" href="/#publico">
                A quem se destina
              </Text>

              <Text as="a" href="/#conteudo">
                O que você irá aprender
              </Text>

              <Text as="a" href="/#clientes">
                Nossos clientes
              </Text>

              <Text as="a" href="/#estrutura">
                Nossa Estrutura
              </Text>

              <Text as="a" href="/#numeros">
                Nossos números
              </Text>
            </Box>
          </Stack>

          <Stack
            direction="column"
            flex="1"
            display="flex"
            justifyContent="start"
            alignItems="center"
            justifyItems="center"
            alignContent="center"
            pb="7%"
          >
            <Text fontSize="1.5rem">Ficou com alguma dúvida?</Text>
            <Box
              pt="5%"
              as="a"
              href="https://api.whatsapp.com/send?phone=551137290513&text=Ol%C3%A1,%20podem%20me%20ajudar?"
              target="_blank"
            >
              <Button
                backgroundColor="transparent"
                fontSize="5rem"
                leftIcon={<FaWhatsapp />}
                _hover={{
                  hover: "none",
                }}
                _focus={{
                  focus: "none",
                }}
              />
            </Box>

            <Box
              pt="5%"
              display="flex"
              alignItems="center"
              alignContent="center"
              justifyContent="center"
              justifyItems="center"
              direction="row"
              fontSize="2.5rem"
              color="white"
            >
              <Box mr="5%">
                <Text
                  as="a"
                  href="https://www.facebook.com/profile.php?id=100016082825172"
                  target="_blank"
                >
                  <Icon as={FaFacebook} />
                </Text>
              </Box>
              <Box
                mr="5%"
                as="a"
                href="https://instagram.com/jhonnymartins"
                target="_blank"
              >
                <Text>
                  <Icon as={FaInstagram} />
                </Text>
              </Box>
              <Box mr="5%">
                <Text
                  as="a"
                  href="https://www.linkedin.com/in/jonathan-martins-988a31165"
                  target="_blank"
                >
                  <Icon as={FaLinkedin} />
                </Text>
              </Box>
              <Box ml="1%">
                <Text
                  as="a"
                  href="https://www.youtube.com/channel/UCIeuyUqWD7pi_RHwt62Q_DA"
                  target="_blank"
                  ml="1%"
                >
                  <Icon as={FaYoutubeSquare} ml="1%" />
                </Text>
              </Box>
            </Box>
          </Stack>

          <Stack
            direction="column"
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems={["center", "center", "center", "start"]}
            justifyItems="center"
            alignContent="center"
          >
            <AlertDialog
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
              blockScrollOnMount={true}
              preserveScrollBarGap={true}
            >
              <AlertDialogOverlay />
              <AlertDialogContent>
                <AlertDialogCloseButton
                  _focus={{ border: "none" }}
                  onClick={onClose}
                />

                <AlertDialogBody
                  fontFamily={"JosefinRegular"}
                  fontSize="1.25rem"
                  display={"flex"}
                  justifyContent="center"
                  alignContent="center"
                  alignItems={"center"}
                  justifyItems="center"
                >
                  <CheckCircleIcon mr="10px" color="green" />
                  Seu formulário foi enviado!
                </AlertDialogBody>
              </AlertDialogContent>
            </AlertDialog>

            <Text fontSize={"2rem"} fontFamily={"JosefinRegular"}>
              Inscreva-se na lista VIP
            </Text>

            <Formik
              validationSchema={validationSchema}
              initialValues={{
                nome: "",
                email: "",
                telefone: "",
                cidade: "",
                mensagem: "",
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                var model = {
                  ToAddresses: [
                    {
                      Name: "Contato Site ",
                      Address: "marketing@souserac.com",
                    },
                  ],
                  FromAddresses: [
                    {
                      Name: "Contato Site",
                      Address: "serac@souserac.com",
                    },
                  ],
                  Subject: "Contato Site",
                  Content: `<h1>Contato Site Missão Contador</h1>
                                     <br/><br/>
                                    Nome: ${values.nome}
                                    <br/>
                                    Telefone: ${values.telefone}
                                    <br/>
                                    E-mail: ${values.email}
                                    <br/>
                                    Cidade: ${values.cidade}
                                    <br/>
                                    Mensagem: ${values.mensagem}`,
                };

                try {
                  const response = await axios.post(
                    "https://api.souserac.com/envioEmailSites/api/SendEmail/Send?id=D90FE81E-4347-4E50-922C-E351A25837DE",
                    model
                  );
                  onOpen();
                } catch (err) {
                  alert("Erro");
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Box display="flex" flexDirection="row">
                    <FormControl id="nome" mr="5%">
                      <FormLabel>Nome </FormLabel>
                      <Input
                        type="nome"
                        h="30px"
                        backgroundColor="white"
                        color="black"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nome}
                        mt="-10px"
                      />
                      <Text color="white">
                        {errors.nome && touched.nome && errors.nome}
                      </Text>
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Email </FormLabel>
                      <Input
                        type="email"
                        h="30px"
                        backgroundColor="white"
                        color="black"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        mt="-10px"
                      />
                      <Text color="white" fontSize="15px">
                        {errors.email && touched.email && errors.email}
                      </Text>
                    </FormControl>
                  </Box>

                  <Box display="flex" flexDirection="row" mt="20px">
                    <FormControl id="cidade" mr="5%">
                      <FormLabel>Cidade </FormLabel>
                      <Input
                        type="cidade"
                        h="30px"
                        backgroundColor="white"
                        color="black"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cidade}
                        mt="-10px"
                      />
                      <Text color="white" fontSize="15px">
                        {errors.cidade && touched.cidade && errors.cidade}
                      </Text>
                    </FormControl>

                    <FormControl id="telefone">
                      <FormLabel>Telefone </FormLabel>

                      <Input
                        type="tel"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={maskPhone(values.telefone)}
                        h="30px"
                        backgroundColor="white"
                        color="black"
                        maxLength={15}
                      />

                      <Text color="white" fontSize="15px">
                        {errors.telefone && touched.telefone && errors.telefone}
                      </Text>
                    </FormControl>
                  </Box>

                  <Box display="flex" pt="2%" mr="5%">
                    <FormControl>
                      <FormLabel>Mensagem </FormLabel>
                      <Textarea
                        resize="none"
                        name="mensagem"
                        backgroundColor="white"
                        color="black"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mensagem}
                        w="360px"
                        h="100px"
                        mt="-10px"
                      />
                      <Text color="white">
                        {errors.mensagem && touched.mensagem && errors.mensagem}
                      </Text>
                    </FormControl>
                  </Box>

                  <Button
                    isLoading={isSubmitting}
                    type="submit"
                    mt="2%"
                    ml="35%"
                    color="white"
                    bg="#ed0a0a"
                    _hover={{
                      bg: "white",
                      color: "black",
                    }}
                    _focus={{ boxShadow: "none" }}
                  >
                    Enviar
                  </Button>
                </Form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
