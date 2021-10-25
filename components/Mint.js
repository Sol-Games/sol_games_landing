import React from "react";
import { Box, Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import dynamic from "next/dynamic";
const MintSolana = dynamic(() => import("components/mint/MintSolana"), {
  ssr: false,
});

const Mint = ({ date, dateOptions }) => {
  const { colors } = useTheme();
  return (
    <Box
      marginTop={[5]}
      pt={[6]}
      pb={[6]}
      sx={{
        background: `linear-gradient(90deg, ${colors.accent1} 10%, transparent 100%)`,
      }}
    >
      <Flex
        maxWidth={["1024px"]}
        margin={["0 auto"]}
        flexDirection={["column"]}
        alignItems="center"
      >
        <Heading fontSize={[6]} fontWeight={[700]}>
          Participate in Game 1
        </Heading>
        <Heading
          fontSize={[5]}
          fontWeight={[700]}
          color={colors.light1}
          textAlign="center"
          maxWidth={["600px"]}
          mt={[4]}
        >
          There will be a 30 min pre-sale. Get your wallet whitelisted on our
          discord server
          <br />
          <br />
          <small>For more info join our discord server.</small>
        </Heading>
        {/* <MintSolana date={date} dateOptions={dateOptions} /> */}
      </Flex>
    </Box>
  );
};

export default Mint;
