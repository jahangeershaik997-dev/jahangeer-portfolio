import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Jahangeer — Senior D365 CRM Developer",
  description:
    "7 years building enterprise CRM solutions on Microsoft Dynamics 365, Azure, and the Power Platform.",
  openGraph: {
    title: "Shaik Jahangeer — Senior D365 CRM Developer",
    description:
      "7 years building enterprise CRM solutions on Microsoft Dynamics 365, Azure, and the Power Platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
