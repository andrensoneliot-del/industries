import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Airflow Industries | Industrial Air Compressor Solutions Mumbai",
  description: "Airflow Industries is an authorized distributor of Anest Iwata air compressors and Festo pneumatic products in Mumbai. Reciprocating, screw, oil-free compressors and vacuum pumps.",
  keywords: ["air compressor Mumbai", "Anest Iwata distributor", "Festo distributor Mumbai", "screw compressor", "reciprocating compressor", "oil-free compressor", "vacuum pump", "industrial air compressor"],
  authors: [{ name: "Airflow Industries" }],
  openGraph: {
    title: "Airflow Industries | Industrial Air Compressor Solutions Mumbai",
    description: "Authorized distributor of Anest Iwata & Festo – Powering Industries Since 1990",
    type: "website",
    locale: "en_IN",
    siteName: "Airflow Industries",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
