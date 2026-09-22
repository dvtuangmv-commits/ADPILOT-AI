import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADPILOT AI — Advertising Intelligence",
  description: "From Ad Data to Better Decisions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="vi"><body>{children}</body></html>;
}