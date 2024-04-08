import { Bubblegum_Sans } from "next/font/google";
import "./globals.css";

const bubblegum_Sans = Bubblegum_Sans({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Sparkle Butterfly",
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bubblegum_Sans.className}>{children}</body>
    </html>
  );
}
