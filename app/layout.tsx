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


  <main className="max-w-7xl mx-auto px-10">
    {children}
  </main>
</body>

    </html>
  );
}

