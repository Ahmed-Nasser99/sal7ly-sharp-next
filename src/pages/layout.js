import { Inter } from "next/font/google";
import "../app/globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html ml lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="-PvRBDpzOv6C3TyToejrkmpSg-q6TN2J8yo7ofEE2A0"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Arabic" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
