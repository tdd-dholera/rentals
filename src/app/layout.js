import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rental In Dholera | Build Rental Income in Dholera",
  description:
    "Explore rental focused investment opportunities in Dholera with expert guidance on the local market, suitable properties, and potential rental income.",
  openGraph: {
    title: "Build Rental Income in Dholera",
    description:
      "Explore rental focused investment opportunities in Dholera with expert guidance on the local market, suitable properties, and potential rental income.",
    images: [{ url: "/images/dholera-hero.png", width: 1920, height: 1080 }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <Script
          id="gtm-head"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WLBLBNTS');`,
          }}
        />
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLBLBNTS"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        
        {children}</body>
    </html>
  );
}
