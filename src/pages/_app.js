//import "@/styles/globals.css";
import "react-phone-number-input/style.css";
import { Baloo_2 } from "next/font/google";
import Script from "next/script"; // Import Next.js Script component
import "@/styles/globals.css";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Meta Pixel Script */}
      <Script
        strategy="afterInteractive" 
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '962895059377944');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=962895059377944&ev=PageView&noscript=1"
        />
      </noscript>

      {/* Main Content */}
      <main className={baloo2.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

