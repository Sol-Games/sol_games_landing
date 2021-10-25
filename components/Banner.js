import React from "react";
import { Box, Flex, Heading } from "rebass";
import { useTheme } from "styled-components";
import Image from "next/image";

const Banner = (props) => {
  const { colors } = useTheme();
  return (
    <Flex
    flexDirection="column"
      paddingTop={["76px"]}
      justifyContent="space-between"
    >
      <Flex flexBasis={["100%"]} flexDirection="column" textAlign="center">
        <Heading fontSize={[7]} fontWeight={[700]} marginBottom={[3]}>
          Get ready for Game 1
        </Heading>
        <Heading fontSize={[4]} fontWeight={[400]} color={colors.light1}>
         One of you will make 10x while rest all bleed 0.2 Sol
         <br/>
         Checkout more info at our discord
 
        </Heading>
      </Flex>
      <Flex flexBasis="100%" sx={{ position: "relative" }}>
        <Image
          layout="fill"
          src={`/dolphin_01.png`}
          alt={`rare dolphin`}
          quality="70"
        />
      </Flex>
    </Flex>
  );
};

export default Banner;
