import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Celena Veiga — Filmfolio",
  description:
    "A film gallery showing some of the danish filminstructor Celena Veiga's previous Projects.",
};

// SEO Optimization
<meta
  name="keywords"
  content="Filmdirector, Screenwriter, Storyteller, Celena, Celena Veiga, Veiga, Danish Filmdirector, Videojournalist, Danish Screenwriter, Danish Storyteller, Copenhagen, Celena Faustino Sousa Veiga"
/>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
