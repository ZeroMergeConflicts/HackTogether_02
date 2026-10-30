import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LibraAI — your learning constellation",
  description: "Catalogue-grounded learning recommendations for ambitious builders."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
