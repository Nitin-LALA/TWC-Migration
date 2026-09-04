import { Manrope } from "next/font/google";
import "./globals.css";
import "@/styles/bootstrap-custom.scss";
import "@/styles/twc-bootstrap.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Design-system typography per the Vitalis-style brief: a single geometric
// grotesque family for both headings and body. Manrope (Google Fonts) used
// as the spec's own named fallback for General Sans/Switzer — no external
// font-service dependency, no licensing risk (unlike the earlier Muller
// demo build).
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "The Wellness Co. | Integrative Wellness & Longevity Clinics in India",
  description:
    "14 clinics across 8 Indian cities. USFDA, CE and ISO-approved integrative wellness and longevity therapies — cryotherapy, IV drips, HBOT, diagnostics and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
