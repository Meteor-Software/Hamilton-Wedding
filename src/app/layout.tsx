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
  title: "Hamilton Wedding - Luke & Shaneel",
  description: "Join us in celebrating the union of Luke & Shaneel. RSVP and wedding details.",
  keywords: "wedding, Hamilton, Luke, Shaneel, ceremony, reception, RSVP",
  authors: [{ name: "Hamilton Wedding" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' }
    ],
    apple: { url: '/favicon.svg', type: 'image/svg+xml' }
  },
  openGraph: {
    title: "Hamilton Wedding - Luke & Shaneel",
    description: "Join us in celebrating the union of Luke and Shaneel.",
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
