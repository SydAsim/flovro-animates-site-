import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const forwardedProtocol = headerList.get("x-forwarded-proto");
  const isLocalHost =
    host?.startsWith("localhost") || host?.startsWith("127.0.0.1");
  const protocol = isLocalHost ? "http" : (forwardedProtocol ?? "https");
  const origin = host
    ? `${protocol}://${host}`
    : "https://vectr-staffing-clone.syedasim2021.chatgpt.site";
  const title = "Flovro | AI Voice Agents, Automation & Web Development";
  const description =
    "Flovro builds AI voice agents, intelligent automations, animated websites, and full-stack products that help businesses grow.";
  const socialImage = `${origin}/og.png`;

  return {
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/_astro/apply.B-bC7KCE.css" />
      </head>
      <body
        style={{
          backgroundColor: "#D0E1EB",
        }}
      >
        {children}
      </body>
    </html>
  );
}
