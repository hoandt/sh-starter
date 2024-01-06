import "../../styles/globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";
import type { Metadata } from "next";

import { Roboto_Mono } from "next/font/google";
import { Be_Vietnam_Pro as FontSans } from "next/font/google";
import { cn } from "../../lib/utils";
import { CommonLayout } from "@/components/common/layout/CommonLayout";
import { ReactQueryProvider } from "@/provider/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster"

export const fontSans = FontSans({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <html lang={locale} className="h-full scroll-smooth">
      <body
        className={cn(
          "flex h-full flex-col bg-background font-sans antialiased bg-blue-50",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReactQueryProvider>
            <CommonLayout>
                {children}
                <Toaster />
            </CommonLayout>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
