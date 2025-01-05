import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function Home() {
  const [moms, setMoms] = useState([]);
  useEffect(() => {
    const getMoms = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/mom/getMoms`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies in the request
          }
        );
        const moms = await res.json();
        if (res.status == 200) {
          setMoms(moms);
          console.log(moms.length);
        }
      } catch (error) {}
    };
    getMoms();
  }, []);
  return (
    <main>
      <h1>Welcome to MOM taker.</h1>
      {moms.length &&
        moms.map((mom) => {
          return (
            <Link href={`/mom/${mom._id}`} key={mom._id}>
              <span>
                {format(parseISO(mom.createdAt), "d MMM yyyy, hh:mma")}
              </span>
              <p>{mom.title}</p>
            </Link>
          );
        })}
    </main>
  );
}
