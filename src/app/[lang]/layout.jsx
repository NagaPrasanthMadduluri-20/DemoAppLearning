

import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
// import Footer from '@/components/footer/Footer';
import { i18n } from "@/next-i18n.config";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params, categorySlug, setSelectedCategory}) {
  


  return (
    <html lang={params.lang}>
      <body className={inter.className}>
      <Header lang={params.lang} categorySlug={categorySlug} setSelectedCategory={setSelectedCategory} />
        {children}
      
      </body>
    </html>
  );
}
