import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nagacharan G | DevOps Engineer",
  description: "DevOps Engineer with 4+ years of experience. CKA Certified. Building scalable infrastructure on Kubernetes, AWS, and cloud-native technologies.",
  keywords: ["DevOps", "SRE", "Platform Engineer", "Kubernetes", "AWS", "CKA", "Cloud Infrastructure"],
  authors: [{ name: "Nagacharan G" }],
  openGraph: {
    title: "Nagacharan G | DevOps Engineer",
    description: "DevOps Engineer with 4+ years of experience. CKA Certified.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
