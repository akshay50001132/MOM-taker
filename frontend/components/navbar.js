import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const isUserLoggedIn = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/isLoggedIn`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies in the request
          }
        );
        if (res.status == 200) {
          setIsLoggedIn(true);
        }
      } catch (error) {}
    };
    isUserLoggedIn();
  }, []);

  const logout = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include cookies in the request
        }
      );
      if (res.status == 200) {
        setIsLoggedIn(false);
        router.push("/");
      }
    } catch (error) {}
  };

  return (
    <nav className="flex justify-between mb-5 font-bold items-center">
      <Link href="/">MOM</Link>
      <div className="flex gap-10 items-center">
        <Link
          href="/create"
          className="bg-black-primary text-white-primary py-1 px-2 rounded"
        >
          Create MOM
        </Link>
        {isLoggedIn ? (
          <div className="text-red-primary" onClick={() => logout()}>
            Logout
          </div>
        ) : (
          <div className="flex">
            <Link className="text-red-primary" href="/login">
              Login
            </Link>
            <p className="mx-1">/</p>
            <Link className="text-red-primary" href="/signup">
              SignUp
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
