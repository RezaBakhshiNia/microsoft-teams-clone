import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const font = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Front",
  description: "Multi device app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} ${font.style} antialiased`}>
        {children}
      </body>
    </html>
  );
}
