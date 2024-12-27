import { Nunito } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";

// Initialize Nunito font
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${nunito.className} p-5`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
