import "./globals.css";
import { MultistepProvider } from "@/context/MultistepContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GitHub Readme Tech Stack",
  description:
    "Show off your favorite technologies, tools, or the tech stack your project uses with these fully customizable cards on your GitHub README.",
  keywords: [
    "react",
    "tailwind",
    "tailwindcss",
    "javascript",
    "js",
    "typescript",
    "ts",
    "tsx",
    "jsx",
    "project",
    "generator",
    "generate",
    "new",
    "web",
    "website",
    "ui",
    "npm",
    "github",
    "readme",
    "profile",
    "github-profile",
    "github-readme",
    "github-profile-readme",
    "tech-stack",
    "tech",
    "stack",
    "github-readme-tech-stack",
    "template",
    "node",
    "package",
    "manager",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden bg-gh-bg font-segoe">
        <MultistepProvider>{children}</MultistepProvider>
      </body>
    </html>
  );
}
