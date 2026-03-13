import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PS Fashion Designer",
  description: "Exclusive designer dresses crafted just for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
