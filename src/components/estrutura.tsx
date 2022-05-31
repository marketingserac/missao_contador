import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export function Estrutura() {
  const smallItemStyles: React.CSSProperties = {
    cursor: "pointer",
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
  };

  return (
    <Box
      id="estrutura"
      pl="10%"
      pr="10%"
      pb="5%"
      pt={["7%", "2%"]}
      backgroundImage="url('assets/images/bg_icons.svg')"
      backgroundSize="cover"
      backgroundAttachment={[
        "initial",
        "initial",
        "initial",
        "inherit",
        "fixed",
      ]}
      backgroundRepeat="no-repeat"
    >
      <Box
        justifyContent="center"
        alignItems="center"
        justifyItems="center"
        alignContent="center"
        display="flex"
        mb="3%"
        textAlign="center"
        flexDirection="column"
      >
        <Heading
          color="white"
          fontSize={["2rem", "2rem", "2rem", "2rem", "3rem", "3.9vw"]}
          lineHeight={["30px", "30px", "30px", "30px", "30px", "3vw"]}
        >
          Estrutura
        </Heading>
        <Text
          color="white"
          fontFamily="JosefinRegular"
          fontSize={["1.2rem", "1.2rem", "1.2rem", "1.2rem", "1.2rem", "2vw"]}
          lineHeight={["25px", "25px", "25px", "25px", "25px", "2.5vw"]}
          w={["auto", "auto", "auto", "40%", "40%", "60%"]}
          mt="1%"
        >
          Todos os participantes terão a oportunidade de conhecer a estrutura
          física do SERAC.
        </Text>
      </Box>
      <Gallery>
        <SimpleGrid
          columns={[2, null, 5]}
          justifyContent="center"
          alignItems="center"
        >
          <Box m="3%">
            <Item
              original="assets/images/predio.jpeg"
              thumbnail="assets/images/predio2.jpeg"
              width="900"
              height="1200"
            >
              {({ ref, open }) => (
                <img
                  style={{ cursor: "pointer" }}
                  alt="Prédio K1"
                  src="assets/images/predio2.jpeg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>

          <Box m="3%">
            <Item
              original="assets/images/serac-sala-de-reuniao.jpeg"
              thumbnail="assets/images/serac-sala-de-reuniao.jpeg"
              width="1200"
              height="700"
              id="so-first"
              title="Sala de Reunião"
            >
              {({ ref, open }) => (
                <img
                  alt="Sala De Reunião SERAC"
                  style={{ cursor: "pointer" }}
                  src="assets/images/serac-sala-de-reuniao.jpeg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>

          <Box m="3%">
            <Item
              original="assets/images/serac-copa.jpeg"
              thumbnail="assets/images/serac-copa.jpeg"
              width="1200"
              height="700"
              title="Copa"
            >
              {({ ref, open }) => (
                <img
                  style={{ cursor: "pointer" }}
                  src="assets/images/serac-copa.jpeg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>

          <Box m="3%">
            <Item
              original="assets/images/serac-equipe.jpeg"
              thumbnail="assets/images/serac-equipe.jpeg"
              width="1200"
              height="700"
              title="Equipe"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles }}
                  src="assets/images/serac-equipe.jpeg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>

          <Box m="3%">
            <Item
              original="assets/images/serac-escritorio.jpeg"
              thumbnail="assets/images/serac-escritorio.jpeg"
              width="1200"
              height="700"
              title="Escritório"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles }}
                  src="assets/images/serac-escritorio.jpeg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>

          <Box m="3%">
            <Item
              original="assets/images/serac-funcionario.jpeg"
              thumbnail="assets/images/serac-funcionario.jpeg"
              width="1200"
              height="700"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles }}
                  src="assets/images/serac-funcionario.jpeg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>

          <Box m="3%">
            <Item
              original="assets/images/serac-presidencia-1.jpg"
              thumbnail="assets/images/serac-presidencia-1.jpg"
              width="1200"
              height="700"
              title="Sala da Presidência"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles }}
                  src="assets/images/serac-presidencia-1.jpg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>

          <Box m="3%">
            <Item
              original="assets/images/serac-presidencia-2.jpg"
              thumbnail="assets/images/serac-presidencia-2.jpg"
              width="1200"
              height="700"
              title="Sala da Presidência"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles }}
                  src="assets/images/serac-presidencia-2.jpg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>

          <Box m="3%">
            <Item
              original="assets/images/serac-recepcao.jpeg"
              thumbnail="assets/images/serac-recepcao.jpeg"
              width="1200"
              height="700"
              title="Recepeção"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles }}
                  src="assets/images/serac-recepcao.jpeg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>

          <Box m="3%">
            <Item
              original="assets/images/serac-vice-presidencia-1.jpg"
              thumbnail="assets/images/serac-vice-presidencia-1.jpg"
              width="1200"
              height="700"
              title="Sala da Vice-Presidência"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles }}
                  src="assets/images/serac-vice-presidencia-1.jpg"
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          </Box>
        </SimpleGrid>
      </Gallery>
    </Box>
  );
}
