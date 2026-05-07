import type { Metadata } from "next";
import { Manrope, Montserrat, } from "next/font/google";
import Header from "@/components/Header/Header";
// @ts-ignore
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gabriel Miranda",
  description: "Portfólio para apresentação pessoal para recrutadores e clientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${manrope.variable} antialiased m-0 p-0 box-border`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
