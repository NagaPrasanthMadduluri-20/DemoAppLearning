// import { Montserrat } from "next/font/google";
// import "./styles/globals.css";
// import Header from "./Header";
// import { ThemeProvider } from "@/components/theme-provider";
// import Footer from "./Footer";

// export const metadata = {
//   title: "Certification Training Courses | ITIL, PMP, PRINCE2, Six Sigma, COBIT 5 | Invensis Learning",
//   description: "Invensis Learning imparts ITIL, PMP, CAPM, PRINCE2, Six Sigma, COBIT 5, DevOps, Cloud Computing, Agile, &amp; Change Management Training courses for individuals and enterprises globally. Trainings are delivered through instructor-led classroom and live online training modes.",
// };

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"], // Add the weights you need
// });

// export default async function RootLayout({ children, params }) {
//   // Providing all messages to the client
//   // side is the easiest way to get started

//   return (
//     <html className={`${montserrat.variable}`}>
//       <body>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Header />
//           {children}
//           <Footer />
//         </ThemeProvider>
//         <script
//             async
//             defer
//             class="cytrio-script"
//             src="https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/2312/2394/script.js"
//           ></script>
//       </body>
//     </html>
//   );
// }

// import { Montserrat } from "next/font/google";
// import Head from "next/head";
// import "./styles/globals.css";
// import Header from "./Header";
// import { ThemeProvider } from "@/components/theme-provider";
// import Footer from "./Footer";
// import Script from 'next/script';

// export const metadata = {
//   title: "Certification Training Courses | ITIL, PMP, PRINCE2, Six Sigma, COBIT 5 | Invensis Learning",
//   description: "Invensis Learning imparts ITIL, PMP, CAPM, PRINCE2, Six Sigma, COBIT 5, DevOps, Cloud Computing, Agile, &amp; Change Management Training courses for individuals and enterprises globally. Trainings are delivered through instructor-led classroom and live online training modes.",
// };

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <html className={`${montserrat.variable}`}>
//       <Head>
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width"
//         />
//         <meta name="robots" content="noindex, nofollow" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
//         <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
//         <link rel="dns-prefetch" href="https://cytriocpmprod.blob.core.windows.net" />
//         <link rel="dns-prefetch" href="https://www.zopim.com" />
//         <link rel="dns-prefetch" href="https://www.google-analytics.com/" />
//         <link rel="dns-prefetch" href="https://static.zdassets.com" />
//         <link rel="dns-prefetch" href="https://www.google.com" />
//         <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
//         <link rel="dns-prefetch" href="https://static.hotjar.com" />
//       </Head>
//       <body>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Header />
//           {children}
//           <Footer />
//         </ThemeProvider>

//         {/* Cytrio Cookie Script */}
//         <Script
//           src="https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/2312/2394/script.js"
//           async
//           defer
//           id="cytrio-script"
//           strategy="lazyOnload"
//         />

//         {/* Google Tag Manager Script */}
//         {/* <Script
//           id="google-tag-manager"
//           src="https://www.googletagmanager.com/gtag/js?id=G-XCLJ09CD6B"
//           strategy="lazyOnload"
         
//         /> */}
//         {/* <Script
//           id="google-tag-manager-init"
//           strategy="lazyOnload"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag() { dataLayer.push(arguments); }
//               gtag('js', new Date());
//               gtag('config', 'G-XCLJ09CD6B');
//             `,
//           }}
//         /> */}

//         {/* Hotjar Script */}
//         <Script
//           id="hotjar"
//           src="https://static.hotjar.com/c/hotjar-3548742.js?sv=6"
//           strategy="lazyOnload"
//           async
//         />

//         {/* Zopim (Zendesk) Chat Widget Script */}
//         <Script
//           strategy="lazyOnload"
//           id="ze-snippet"             
//           src = 'https://static.zdassets.com/ekr/snippet.js?key=b5798bd8-0e7e-4e68-a1d0-6d949b4063e6'
//           async
//           defer
//         />
//       </body>
//     </html>
//   );
// }

import { Montserrat } from "next/font/google";
import Head from "next/head";
import "./styles/globals.css";
import Header from "./Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./Footer";
import Script from 'next/script';
import LazyScript from "./components/LazyScript";// Import the new component

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html className={`${montserrat.variable}`} lang="en">
      <Head>
        {/* ... (head content as before) ... */}
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

        {/* Use LazyScript for delayed loading */}
        {/* <LazyScript 
          src="https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/2312/2394/script.js" 
          delay={10000} 
          className="cytrio-script"
          id="cytrio-script"
        /> */}

        {/* Other scripts can be loaded similarly */}
        <LazyScript 
          src="https://static.hotjar.com/c/hotjar-3548742.js?sv=6" 
          delay={20000} 
          id="hotjar"
        />

        <LazyScript 
          src="https://static.zdassets.com/ekr/snippet.js?key=b5798bd8-0e7e-4e68-a1d0-6d949b4063e6" 
          id="ze-snippet"
          delay={10000} 
          loadOnUserActivity={true}
        />

        {/* <LazyScript
          src="https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/2312/2394/script.js"
          className="cytrio-script"
          delay={5000}
          loadOnUserActivity={true}
        /> */}

        {/* <script
        async
        defer
        strategy="lazyOnload" 
        class="cytrio-script"
        src="https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/2312/2394/script.js"
        ></script> */}
         <script
          class="cytrio-script"
          id="cytrio-script"         
          async
          defer
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/2312/2394/script.js';
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
              })();
            `,
          }}
        />

        {/* <script
          class="cytrio-script"
          id="cytrio-script"
          async
          defer
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                setTimeout(function() {
                  var script = document.createElement('script');
                  script.src = 'https://cytriocpmprod.blob.core.windows.net/cytrio-public/cookiescript/2312/2394/script.js';
                  script.async = true;
                  script.defer = true;
                  document.head.appendChild(script);
                }, 5000); // Delay of 5 seconds (5000 milliseconds)
              })();
            `,
          }}
        /> */}


        {/* For scripts that need to be loaded earlier, you can still use Next.js Script component */}
        {/* <Script
          id="google-tag-manager"
          src="https://www.googletagmanager.com/gtag/js?id=G-XCLJ09CD6B"
          strategy="afterInteractive"
        />
        <Script
          id="google-tag-manager-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'G-XCLJ09CD6B');
            `,
          }}
        /> */}
      </body>
    </html>
  );
}
