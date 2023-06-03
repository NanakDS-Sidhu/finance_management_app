"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className=" bg-indigo-950 text-white">
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}