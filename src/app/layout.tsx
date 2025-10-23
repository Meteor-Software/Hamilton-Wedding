import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hamilton Wedding - Sarah & Michael",
  description: "Join us in celebrating the union of Sarah and Michael on June 15, 2024. RSVP and wedding details.",
  keywords: "wedding, Hamilton, Sarah, Michael, ceremony, reception, RSVP",
  authors: [{ name: "Hamilton Wedding" }],
  openGraph: {
    title: "Hamilton Wedding - Sarah & Michael",
    description: "Join us in celebrating the union of Sarah and Michael on June 15, 2024.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
