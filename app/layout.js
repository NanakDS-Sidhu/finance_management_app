"use client";
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html className=" bg-no-repeat bg-cover bg-fixed text-white bg-my_bg_image" >
      <head />
      <body className="backdrop-blur-3xl min-h-screen">
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>


      </body>
    </html>
  );
}