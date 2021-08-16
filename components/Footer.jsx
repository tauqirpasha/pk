/* eslint-disable no-console */
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoRepoForked, GoStar } from "react-icons/go";
import { animateScroll as scroll } from "react-scroll";

import links from "../data/footerLinks";


export default function Footer() {
  return (
    <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
      
        <Text fontSize="sm">
         {/* Made with{" "}
          <span aria-label="heart" role="img">
            &#128153;
          </span>
          {" (and React) by Jarrod Servilla"}
        */}
        prakash kusle | +91 8186886808 | prakashkusle@gmail.com
        </Text>
        <Link to="/Path" > Résumé. </Link> 
  

      <Text fontSize="sm" mt={2} onClick={scroll.scrollToTop}>
        <span role="img" aria-label="rocket">
          &#128640;
        </span>{" "}
        Click me to scroll to the top!{" "}
        <span role="img" aria-label="rocket">
          &#128640;
        </span>
      </Text>

    </Box>
  );
}
