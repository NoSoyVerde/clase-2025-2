import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants" ;
import { ThemeProvider } from "next-themes";

const interFont = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  metadataBase: new URL (SERVER_URL)
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const temas = ['system', 'light', 'dark', 'nature','darknature'];
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.className} antialiased`}
      >
        <ThemeProvider
           value={Object.fromEntries(temas.map((t) => [t, t]))}
          attribute={"class"}
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
