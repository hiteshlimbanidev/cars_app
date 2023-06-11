import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Cars App",
  description: "Best cars in world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
