import React from "react";
import { Box, Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import { LINKS } from "messages";
import {
  GiPenguin as GiPenguinBase,
  GiRoad,
  GiThorHammer,
} from "react-icons/gi";
import { AiOutlineQuestion, AiOutlineRocket } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import NavLink from "next/link";
import Button from "components/Button";
import { LinkExternal as Link } from "components/Links";
import { IS_MINT_LINK_VISIBLE } from "messages";

const GiPenguin = styled(GiPenguinBase)`
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.colors.dark};
  }
`;
const StyledHeader = styled.nav`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  backdrop-filter: blur(5px);
`;
const StyledFlex = styled(Flex)`
  visibility: hidden;
  @media (min-width: 1024px) {
    visibility: unset;
  }
`;
const Header = () => {
  const { colors } = useTheme();

  return (
    <>
      <StyledHeader>
        <Flex flexBasis="50%">
          <NavLink href="/">
            <Heading fontSize={[6]}>Sol Games</Heading>
          </NavLink>
        </Flex>
        {/* <StyledFlex
          justifyContent="center"
          alignItems="center"
          flexBasis={["40%", "25%"]}
        >
          {LINKS.map((link) => (
            <Box mr={[3]} key={link.label}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </Box>
          ))}
        </StyledFlex> */}
        <Flex
          flexBasis={["50%"]}
          justifyContent="flex-end"
          alignItems="center"
          pl={[3]}
        >
          <Link
            marginRight={[4]}
            href="https://discord.gg/vr74bMDa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiDiscord fill={colors.light} size="36px" />
          </Link>
          {/* <Link href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter fill={colors.light} size="36px" />
          </Link> */}
        </Flex>
      </StyledHeader>
    </>
  );
};

export default Header;
