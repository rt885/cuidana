import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Dashboard/Navbar";
import Footer from "@/components/Dashboard/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Elige los pesos que necesites
  variable: "--font-lato",
});

export const metadata = {
  title: "Enfermeras a Domicilio | Cuidado Profesional en Casa",
  description:
    "Solicita enfermeras certificadas a domicilio de forma sencilla, rápida y segura. Atención de salud personalizada, monitoreo de pacientes y cuidados especializados en tu hogar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lato.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
