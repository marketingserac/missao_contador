import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Heading, Text } from "@chakra-ui/react";

export function Clientes() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {
        max: 4000,
        min: 3000,
      },
      items: 3,
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
    },
    tablet: {
      breakpoint: {
        max: 1050,
        min: 464,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 0.5,
    },
  };

  return (
    <Box
      id="clientes"
      backgroundImage="url('assets/images/bg_header.svg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment={[
        "initial",
        "initial",
        "initial",
        "inherit",
        "fixed",
      ]}
      display="flex"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
      flexDirection="column"
      pb="5%"
      pt="5%"
      minH={["60vh", "100vh", "600px", "600px", "100vh", "50vh"]}
    >
      <Box
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        justifyItems="center"
        display="flex"
      >
        <Heading
          textAlign="center"
          color="white"
          fontSize={["2rem", "2rem", "2rem", "2rem", "3rem", "3.9vw"]}
          lineHeight={["30px", "30px", "30px", "30px", "30px", "3vw"]}
        >
          Alguns Clientes
        </Heading>
      </Box>

      <Box
        mr="10%"
        ml="10%"
        display="grid"
        backgroundColor="rgba(255,255,255,0.66)"
        mt="5%"
      >
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          color="rgba(255,255,255,0.2)"
        >
          <Heading textAlign="center" color="transparent" fontSize="0.01rem">
            .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Heading>
        </Box>

        <Carousel
          focusOnSelect={true}
          centerMode={true}
          infinite={true}
          responsive={responsive}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          afterChange={function (previousSlide, _ref) {}}
          slidesToSlide={1}
        >
          <Box
            as="img"
            src="assets/images/marca_Bradesco.png"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_XP.png"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_Primo.png"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_Kopenhagen.webp"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_Sorridents.png"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_Mundial.png"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_Farmais.png"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_Diniz.png"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_Justwater.webp"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_Loggi.png"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_g4.png"
          />

          <Box
            as="img"
            w={["150px", "150px", "150px", "150px", "150px", "10vw"]}
            src="assets/images/marca_Jovens.png"
          />
        </Carousel>
      </Box>

      <Box mr="10%" ml="10%" display="grid" mt="5%">
        <Box justifyContent="center" alignItems="center" display="flex">
          <Heading textAlign="center" color="transparent" fontSize="0.01rem">
            .aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </Heading>
        </Box>

        <Carousel
          focusOnSelect={true}
          centerMode={true}
          infinite={true}
          responsive={responsive}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          afterChange={function (previousSlide, _ref) {}}
          slidesToSlide={1}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/primo.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Primo Rico
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/perrucho.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Breno Perrucho
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/g4.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Gestão 4.0
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/hyeser.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Hyeser
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/davi.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              David Braga
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/thiago.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Tiago T-Car
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/rob.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Rob Correa
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/wilou.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Willou e Watson
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/frederico.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Frederico Flores
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/bruno.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Bruno Perini
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/ana.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Ana Jords
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/joel.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Joel Jota
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/ivan.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Ivan Moré
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/pyong_lee.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Pyong Lee
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyItems="center"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Box
              as="img"
              w={["250px", "250px", "250px", "250px", "250px", "15vw"]}
              src="assets/images/boca.png"
            />
            <Text
              color="white"
              fontSize={[
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "1.2rem",
                "2vw",
              ]}
            >
              Boca Rosa
            </Text>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
}
