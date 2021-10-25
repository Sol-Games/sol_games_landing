import React from "react";
import { Box, Flex, Heading, Card, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { ROADMAP } from "messages";

const Roadmap = () => {
  const { colors } = useTheme();
  return (
    <Box marginTop={[5]} py={[5]}>
      <Flex
        maxWidth={["1024px"]}
        margin={["0 auto"]}
        flexDirection={["row"]}
        justifyContent="space-between"
      >
        <Flex flexBasis="40%" sx={{ position: "relative" }}>
          <Card
            width={[256, 340]}
            mx="auto"
            sx={{
              overflow: "hidden",
              borderRadius: "12px",
              border: `2px solid ${colors.dark1}`,
            }}
            ml={[0]}
          >
            <Box sx={{ position: "relative" }} height="300px">
              <Image src="/69.png" layout="fill" quality={70} />
            </Box>
            <Box backgroundColor={colors.dark1} p={[4]}>
              <Heading fontSize={[5]} fontWeight={400} mb={[3]}>
                Player 69
              </Heading>
              <Flex alignItems="center">
                <Box
                  height="40px"
                  width="40px"
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "50%",
                  }}
                >
                  <Image
                    src="/square.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                  />
                </Box>
                <Heading fontSize={[3]} ml={[3]} fontWeight={400}>
                  Apeclub
                </Heading>
              </Flex>
            </Box>
            <Box backgroundColor={colors.dark2} px={[4]} py={[4]}>
              <Heading fontSize={[4]} fontWeight={400} color={colors.light1}>
                Original
              </Heading>
              <Heading fontSize={[4]} fontWeight={400} mt={[2]}>
                Created Oct 2021
              </Heading>
            </Box>
          </Card>
        </Flex>
        <Flex flexBasis={["50%"]} flexDirection="column">
          <Heading fontSize={[6]} fontWeight={[700]} marginBottom={[3]}>
            Insanely low fees
          </Heading>
          <Heading fontSize={[5]} fontWeight={[400]} color={colors.light1}>
            With an average game fee of less than 4 Sol, Sol Games are shifting
            the balance of power back to NFT enthusiasts.
            <br />
            <br />
            <small> Given below are stats for Game 1:</small>
          </Heading>
          <Flex mt={[5]} justifyContent="space-between">
            {ROADMAP.map((step) => (
              <Flex flexDirection="column" p={[2]}>
                <Text fontSize={2}>{step.what}</Text>
                <Heading fontSize={[4]} mt={[3]}>
                  {step.when}
                </Heading>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Roadmap;
