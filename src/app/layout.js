"use client";

import Login from "@/components/Login";
import "./globals.css";
import { useEffect, useState } from "react";

const metadata = {
  title: "Task App Using Next.Js",
  description: "Mange Your Tasks By Future Task App",
};

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => setUser(JSON.parse(localStorage.getItem("user"))), []);

  return (
    <html lang="en">
      <body>
        {!user ? (
          <Login />
        ) : (
          <div className="flex flex-row">
            <div className="flex-1">{children}</div>
          </div>
        )}
      </body>
    </html>
  );
}
