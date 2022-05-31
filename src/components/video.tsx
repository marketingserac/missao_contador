import { Box, Flex, Stack, AspectRatio } from "@chakra-ui/react";

export function Video() {
  return (
    <Flex
      id="video"
      direction={["column", "column", "column"]}
      justifyContent="center"
      display="flex"
      justifyItems="center"
      alignItems="center"
      alignContent="center"
      w="100%"
      minH={["50vh", "50vh", "50vh", "50vh"]}
      pb={["5%", "5%"]}
      pt={["5%", "5%"]}
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
    >
      <Box mt="0%" w="100%" h="100%" display="flex" flexDirection="column">
        <Stack
          spacing={1}
          h="100%"
          color="white"
          display="flex"
          direction={["column", "column", "column", "row"]}
          paddingX="5%"
        >
          <Stack
            direction="column"
            flex="1"
            paddingX={["2%", "0", "5%", "5%"]}
            display="flex"
            justifyContent="center"
            alignItems="center"
            justifyItems="center"
            alignContent="center"
            textAlign={["center", "center", "center", "left"]}
          >
            <AspectRatio
              w={["320px", "320px", "320px", "760px", "40vw"]}
              h={["200px", "200px", "200px", "410px", "20vw"]}
              ratio={1}
            >
              <iframe
                src="https://www.youtube.com/embed/iVGnlOcWk0E"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </AspectRatio>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
}
