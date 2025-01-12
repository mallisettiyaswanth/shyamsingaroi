import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import QueryWrapper from "@/wrapper/QueryWrapper";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Shyam Silks",
  description: "Experience the Elegance of Silk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClerkProvider signInFallbackRedirectUrl="/admin">
          <QueryWrapper>{children}</QueryWrapper>
        </ClerkProvider>
      </body>
    </html>
  );
}
