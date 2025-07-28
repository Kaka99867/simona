import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./bahasa";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // tambahkan 500 untuk Medium
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simona",
  description: "Website Tradisi Sinoman Jawa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cinzel.className}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
