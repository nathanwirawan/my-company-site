import Link from "next/link";
import Image from "next/image";

import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}




