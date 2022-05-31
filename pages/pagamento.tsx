import { WhastsAppButton } from "../src/components/whatsapp";
import { Preco } from "../src/components/price";
import { Numeros } from "../src/components/numbers";
import { Vagas } from "../src/components/vagas";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import handleViewport from "react-in-viewport";
import * as gtag from "../lib/gtag";

const Block = (props) => {
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return <Numeros />;
  }
  return <div ref={forwardedRef}></div>;
};

const ViewportBlock = handleViewport(Block);

export default function Home() {
  return (
    <Box maxW="100%" backgroundColor="black">
      <Head>
        <meta name="theme-color" content="#000000" />
        <title>Missão Contador</title>
        <script
        //   dangerouslySetInnerHTML={{
        //     __html: ` !function(f,b,e,v,n,t,s)
        //             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        //             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        //             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        //             n.queue=[];t=b.createElement(e);t.async=!0;
        //             t.src=v;s=b.getElementsByTagName(e)[0];
        //             s.parentNode.insertBefore(t,s)}(window, document,'script',
        //             'https://connect.facebook.net/en_US/fbevents.js');
        //             fbq('init', '1082080379002942');
        //             fbq('track', 'PageView');`,
        //   }}
        />
      </Head>

      <Preco />
      <Vagas />

      <WhastsAppButton />
    </Box>
  );
}
