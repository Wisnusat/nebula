import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Include font weights you need
  variable: '--font-poppins',   // Set the CSS variable
});


export const metadata: Metadata = {
  title: "Nebula",
  description: "Next Generation DEX Exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
