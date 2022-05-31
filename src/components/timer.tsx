import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <Box style={{ textAlign: "center" }}>
      <Box
        ml={["0", "5%"]}
        flexDirection="row"
        display="flex"
        style={{ fontSize: "70px" }}
        fontFamily="Digital"
        lineHeight={["50px", "45px"]}
        mt="5%"
        color="red"
        textShadow="0 0 0.05em #F56565, 0 0 0.2em #C53030, 0 0 0.3em #E53E3E"
      >
        <span>
          {" "}
          {days}
          <Box fontSize={["20px", "25px", "25px", "25px"]} mt="-15%">
            Dias
          </Box>
        </span>
        :
        <span>
          {" "}
          {hours}
          <Box fontSize={["20px", "25px", "25px", "25px"]} mt="-10%">
            Horas
          </Box>
        </span>
        :
        <span>
          {" "}
          {minutes}
          <Box fontSize={["20px", "25px", "25px", "25px"]} mt="-10%">
            Minutos
          </Box>
        </span>
        :
        <span>
          {" "}
          {seconds}
          <Box fontSize={["20px", "25px", "25px", "25px"]} mt="-10%" mr="-5%">
            Segundos
          </Box>
        </span>
      </Box>
    </Box>
  );
}

// ate 21/03
export function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 259200); //20 dias

  return (
    <Box
      id="home"
      display="flex"
      flexDirection={["column", "column", "row"]}
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      justifyItems="center"
      pt={["3%", "3%", "2%"]}
      backgroundColor="black"
    >
      <Box>
        <Heading
          color="red"
          w="100%"
          mr="4%"
          P="2%"
          textShadow="0 0 0.02em #F56565, 0 0 0.05em #C53030, 0 0 0.1em #E53E3E"
          textAlign="center"
          fontFamily="JosefinRegular"
          fontSize={["2rem", "2.2rem", "3.5rem", "3.5rem", "3.1vw"]}
        >
          ENCERRA EM:
        </Heading>
      </Box>
      <Box w="300px">
        <MyTimer expiryTimestamp={time} />
      </Box>
    </Box>
  );
}
