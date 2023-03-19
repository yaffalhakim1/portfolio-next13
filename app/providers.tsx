// app/providers.jsx

"use client";

import { ThemeProvider } from "next-theme";

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
