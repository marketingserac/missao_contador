/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

class WebDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head>
   {/* <!-- Global site tag (gtag.js) - Google Ads: 860794148 --> */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />

                <script dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); } 
        gtag('js', new Date()); 
         gtag('config', '${GA_TRACKING_ID}');`}} />
          {/* <!-- End Global site tag (gtag.js) - Google Ads: 860794148 --> */}
          <script dangerouslySetInnerHTML={{
                    __html: ` !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1082080379002942');
                    fbq('track', 'PageView');`}} />
          

                </Head>
                
                <body>
                    <Main />
                    <NextScript/>
                    <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                
                <noscript dangerouslySetInnerHTML={{
                    __html: `<img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=1082080379002942&ev=PageView&noscript=1"
                  />`
                }}></noscript>
                
                </body>

            </Html>
        )
    }
}
export default WebDocument