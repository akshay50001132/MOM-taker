import { Nunito } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "MOM taker",
  description: "Create minutes of meeting in better way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} lg:py-5 lg:px-10 p-4`}>
        <nav className="flex justify-between mb-5 font-bold">
          <p>MOM</p>
          <div className="flex">
            <Link className="text-red-primary" href="/login">
              Login
            </Link>
            <p className="mx-1">/</p>
            <Link className="text-red-primary" href="/login">
              SignUp
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
