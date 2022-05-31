import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/styles/theme";
import Fonts from "../src/styles/fonts";
import Head from "next/head";
import * as gtag from "../lib/gtag";
import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

Router.events.on("routeChangeStart", (event) => {
  console.log(event);
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
        <meta name="theme-color" content="#00000" />
        <title>Missão Contador</title>
      </Head>
      <Fonts />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
