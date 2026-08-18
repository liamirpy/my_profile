import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amir Mousavi | Backend & AI Systems Engineer",
  description:
    "Portfolio of Amir Mousavi, a backend, AI systems and machine-learning engineer building reliable software for intelligent and scientific workflows.",
  keywords: [
    "Amir Mousavi",
    "Backend Engineer",
    "AI Systems Engineer",
    "Machine Learning Engineer",
    "Research Software Engineer",
    "RAG",
    "Python",
  ],
  other: {
    "codex-preview": "development",
  },
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
      <body>{children}</body>
    </html>
  );
}
