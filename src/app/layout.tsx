import { Provider as JotaiProvider } from "jotai";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/features/theme/provider/provider";
import { ReactQueryProvider } from "@/shared/ui/provider/react-query";
import { Footer } from "@/widgets/footer/ui/footer";
import { Header } from "@/widgets/header/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RESAS APP",
  description: "都道府県人口推移グラフ表示アプリ",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReactQueryProvider>
          <JotaiProvider>
            <ThemeProvider>
              <Header className="fixed top-0" />
              {children}
              <Footer />
            </ThemeProvider>
          </JotaiProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
