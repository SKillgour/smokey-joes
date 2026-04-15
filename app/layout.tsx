import type { Metadata } from "next";
import "./globals.css";
import SmokeyIntro from "@/components/smokey/SmokeyIntro";

export const metadata: Metadata = {
  title: "Smokey Joe's Lunch Bar | Palmerston North",
  description: "Real food. No fuss. Homemade burgers, bain marie meals and fresh baking. Open 7am — 16 Bennett Street, Palmerston North.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmokeyIntro />
        {children}
      </body>
    </html>
  );
}
