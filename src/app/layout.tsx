import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/sections/footer/footer";
import {
  MobileNav,
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  MobileNavItems,
} from "@/components/ui/resizable-navbar";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "adaptiserv",
  description: "adaptiserv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen`}>
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems
              items={[
                { name: "Accueil", link: "/" },
                { name: "Services", link: "/services" },
                { name: "A propos", link: "/about" },
                { name: "Contact", link: "/contact" },
              ]}
            />
          </NavBody>
          <MobileNav>
            <MobileNavItems
              items={[
                { name: "Accueil", link: "/" },
                { name: "Services", link: "/services" },
                { name: "A propos", link: "/about" },
                { name: "Contact", link: "/contact" },
              ]}
            />
          </MobileNav>
        </Navbar>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
