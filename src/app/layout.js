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
    "Explore rental-focused investment opportunities in Dholera with expert guidance on the local market, suitable properties, and potential rental income.",
  openGraph: {
    title: "Build Rental Income in Dholera",
    description:
      "Explore rental-focused investment opportunities in Dholera with expert guidance on the local market, suitable properties, and potential rental income.",
    images: [{ url: "/images/dholera-hero.png", width: 1920, height: 1080 }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
