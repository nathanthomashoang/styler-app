import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '../components/client/NavBar';
import Footer from '@/components/server/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/styles/theme';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Styler",
  description: "We pick your outfits so you don't have to",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <NavBar />
          <div className=" mx-auto w-full max-w-screen-xl min-h-screen">
            {children}
          </div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
