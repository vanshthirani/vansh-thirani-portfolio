import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vansh Thirani | Business, Markets & Research",
  description:
    "Portfolio of Vansh Thirani — business student, investment researcher, published author and youth leader.",
  keywords: [
    "Vansh Thirani",
    "business portfolio",
    "investment research",
    "financial markets",
    "digital business",
  ],
  authors: [{ name: "Vansh Thirani" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
