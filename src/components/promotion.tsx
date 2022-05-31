import {
  Box,
  Text,
  Flex,
  Stack,
  Image,
  Button,
  List,
  ListItem,
  ListIcon,
  Icon,
} from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";

export function Promotion() {
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
      pb={["0%", "15%", "0.1%"]}
      pt={["2%", "15%", "3%", "2%"]}
      backgroundColor="black"
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
          >
            <List fontSize="2.3rem" fontFamily={"JosefinBold"}>
              <ListItem lineHeight={"2.6rem"}>
                <ListIcon as={BiRightArrow} color="white" />
                As habilidades mais valiosas da gestão de negócios.
              </ListItem>
              <ListItem lineHeight={"2.6rem"} mt="35px">
                <ListIcon as={BiRightArrow} color="white" />
                Técnicas para fechar mais de 3 contratos por dia.
              </ListItem>
              <ListItem lineHeight={"2.6rem"} mt="35px">
                <ListIcon as={BiRightArrow} color="white" />
                Como colocar seu negócio no próximo nível.
              </ListItem>
            </List>
          </Flex>
          <Flex
            flex={1}
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            justifyItems="center"
          >
            <Image
              alt="Jhonny"
              src="assets/images/MosaicoJhonny.png"
              w={["316px", "450px", "412px", "584px", "600px", "47vw", "30vw"]}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
