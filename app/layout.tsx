import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = "https://jahangeershaik.is-a.dev";
const TITLE = "Shaik Jahangeer | Senior Microsoft Dynamics 365 CE/CRM Developer";
const DESCRIPTION =
  "Senior Microsoft Dynamics 365 CE/CRM Developer with 7+ years of experience in enterprise CRM customization, C# plugins, JavaScript, workflows, Azure Functions, Power Automate, WebAPI, integrations and DevOps.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Shaik Jahangeer",
    "Dynamics 365 Developer",
    "Dynamics 365 CE",
    "Microsoft Dynamics CRM",
    "CRM Developer Hyderabad",
    "C# Plugins",
    "Power Platform",
    "Azure Functions",
    "Power Automate",
    "Azure DevOps",
  ],
  authors: [{ name: "Shaik Jahangeer" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Shaik Jahangeer",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
