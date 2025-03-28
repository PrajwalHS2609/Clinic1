import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "@/components/TopBar/Topbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
