import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { FC } from "react";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Editor",
  description:
    "This is text editor that supports all modern programing languages",
};

type Props = {
  children: React.ReactNode;
};
const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
