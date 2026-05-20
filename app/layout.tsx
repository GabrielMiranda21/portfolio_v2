import type { Metadata } from "next";
import { Manrope, Montserrat, } from "next/font/google";
import Header from "@/components/Sections/Header/Header";
import CustomCursor from "@/components/Custom/CustomCursor";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap"
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "<Gabriel Miranda/>",
  description: "Portfólio para apresentação pessoal para recrutadores e clientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${manrope.variable} antialiased m-0 p-0 box-border`}
      >
        <Header />
        <CustomCursor />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
