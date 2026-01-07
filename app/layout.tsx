import Link from "next/link";
import Image from "next/image";

import "./globals.css";
import Header from "./components/Header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<body className="font-sans">
<Header />


  <main className="max-w-6xl mx-auto px-10 py-7">
    {children}
  </main>
</body>

    </html>
  );
}

