import Header from "@/components/Header";
import localFonts from "next/font/local";
import "../styles/globals.css";

const myCustomFont = localFonts({
  src: [
    {
      path: "../assets/fonts/Inter_24pt-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter_24pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter_24pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter_24pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter_24pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myCustomFont.variable}>
      <body>
        <Header />
        <div className="containerPage">{children}</div>
      </body>
    </html>
  );
}
