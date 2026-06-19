import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dutch AI Tutor",
  description: "A practical daily Dutch learning helper for professional fluency.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="page-shell">{children}</main>
      </body>
    </html>
  );
}
