"use client";
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/ui/fonts";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";
export const metadata: Metadata = {
  title: "To Do App",
  description: "To do application to track your tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      {/* <QueryClientProvider client={queryClient}> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* </QueryClientProvider> */}
    </html>
  );
}
