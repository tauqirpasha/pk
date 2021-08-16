import {
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../SectionContainer";

const Bio = ({ secondary }) => (
  <GridItem>
    <VStack m="auto" w="75%" spacing="12px" pt="5%">
      <Text>
        Hi, I&apos;m Prakash Kusle! I am an Interior designer{" "}
        <strong style={{ color: secondary }}>
          Space planning Specialist
        </strong>{" "}
        graduate from Hamstech (JNAFAU).
      </Text>
     {/*<Text>
        I&apos;m currently working at Citi Bank as a{" "}
        <strong style={{ color: secondary }}>Technology Analyst Intern</strong>,
        and was previously at Citylitics Inc. as a{" "}
        <strong style={{ color: secondary }}>
          Full Stack & Data Developer Intern
        </strong>{" "}
        for 9 months prior.
      </Text>
      */}
      <Text>
        I enjoy designing & Space planning{" "}
        <strong style={{ color: secondary }}>
          efficient in Autocad,Sketchup,V-ray and photoshop
        </strong>
        . I have a{" "}
        <strong style={{ color: secondary }}>passion for visualizing new concepts on an empty canavas</strong>, and
        have worked as an intern at the <strong style={{ color: secondary }}> Inside story group.</strong>
      </Text>
    </VStack>
  </GridItem>
);

const Headshot = () => (
  <GridItem>
    <Image
      m="auto"
      src="/me.jpeg"
      alt="Prakash Kusle"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("https://www.linkedin.com/in/prakash-tinku-9ab6831b2");
      }}
    />
  </GridItem>
);

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="About Me"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={12}
        columns={[1, null, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Bio secondary={secondary} /> : <Headshot />}
        {shouldAlternate ? <Headshot /> : <Bio secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
