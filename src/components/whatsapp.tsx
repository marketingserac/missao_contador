import { Box, Button } from "@chakra-ui/react";

export function WhastsAppButton() {
  return (
    <Box id="whatsappButton">
      <Box mt="2%" position="fixed" right="23px" bottom="25px">
        <Box
          as="a"
          href="https://api.whatsapp.com/send?phone=551137290513&text=Ol%C3%A1,%20podem%20me%20ajudar?"
          target="_blank"
        >
          <Button
            backgroundImage="assets/images/whatsapp.png"
            w={["50px", "70px", "70px", "70px", "5vw"]}
            h={["50px", "70px", "70px", "70px", "5vw"]}
            backgroundSize="contain"
            background="transparent"
            _hover={{
              hover: "none",
            }}
            _focus={{
              focus: "none",
            }}
          ></Button>
        </Box>
      </Box>
    </Box>
  );
}
