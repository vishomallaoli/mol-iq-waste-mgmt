// "use client";
// import "jsvectormap/dist/jsvectormap.css";
// import "flatpickr/dist/flatpickr.min.css";
// import "@/css/style.css";
// import React, { useEffect, useState } from "react";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body suppressHydrationWarning={true}>{children}</body>
//     </html>
//   );
// }

"use client";

import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/style.css";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* Wrap the entire application inside SessionProvider */}
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}