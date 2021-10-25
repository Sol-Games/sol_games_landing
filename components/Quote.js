import React from "react";
import { Box, Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.light1};
`;

const Quote = () => {
  const { colors } = useTheme();
  return (
    <Box
      sx={{
        background: `linear-gradient(90deg, ${colors.accent1} 10%, transparent 100%)`,
      }}
      marginTop={[6]}
      py={[5]}
    >
      <Flex
        maxWidth={["1024px"]}
        margin={["0 auto"]}
        flexDirection={["row"]}
        alignItems="center"
      >
        <Box
          sx={{ borderRadius: "50%", overflow: "hidden", position: "relative" }}
          height="209px"
          width="209px"
        >
          <Image
            src={`/front_man.jpg`}
            alt={`artist dolphin`}
            layout="fill"
            objectFit="cover"
            quality="70"
          />
        </Box>
        <Box flexBasis="70%" marginLeft={[5]}>
          <Heading fontSize={[5]} fontWeight={[700]}>
            “Sol Games will do for Solana NFTs what CryptoPunks did for
            ethereum, but takes it one step further by not acting like a punk.
            Be humble.”
          </Heading>
          <Heading fontSize={[5]} fontWeight={[700]} marginTop={[3]}>
            Employee_001, <StyledSpan>Frontman</StyledSpan>
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Quote;
