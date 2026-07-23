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
  const origin = host ? `${protocol}://${host}` : "https://www.vectrfl.com";
  const title = "Vectr | The New Standard in Staffing";
  const description =
    "AI-driven speed and expert curation for industrial staffing in high-consequence environments.";
  const socialImage = `${origin}/og.png`;

  return {
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/icons/favicon-32x32.png",
      apple: "/icons/apple-touch-icon.png",
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
    <html lang="en" className="preload">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/_astro/apply.B-bC7KCE.css" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "requestAnimationFrame(()=>requestAnimationFrame(()=>document.documentElement.classList.remove('preload')));",
          }}
        />
      </head>
      <body
        style={{
          backgroundColor: "#D0E1EB",
          overflow: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
