import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "DK Motors | Premium Japanese Vehicle Imports",
  description:
    "Luxury Japanese car & motorcycle imports. Direct from Japan with inspections, shipping, and documentation handled.",
  keywords: "Japanese cars, JDM imports, Japan motorcycles, DK Motors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <Header />
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
