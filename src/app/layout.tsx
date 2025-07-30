import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/context/SidebarContext";
import ContextWrapper from "@/context/ContextWrapper";
import { getAllWebSettingsData } from "@/lib/api";

const raleway = Raleway({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getAllWebSettingsData();
  const defaultTitle = "Chairs BD | Best Ecommerce Site in Bangladesh";
  const defaultDescription = "Chairs BD | Best Ecommerce Site in Bangladesh";

  return {
    title: settings?.data?.title || defaultTitle,
    description: defaultDescription,
    icons: {
      icon: settings?.data?.favicon || "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        {/* <Suspense fallback={'Loading...'}> */}
        <ContextWrapper>
          <SidebarProvider>
            {children}

          </SidebarProvider>
        </ContextWrapper>
        {/* </Suspense> */}
      </body>
    </html>
  );
}
