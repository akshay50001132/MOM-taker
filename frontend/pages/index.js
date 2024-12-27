import { useEffect, useState } from "react";

export default function Home() {
  const [moms, setMoms] = useState(null);
  useEffect(() => {
    const getSelfMoms = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/mom/getSelfMoms`,
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
          console.log(moms);
        }
      } catch (error) {}
    };
    getSelfMoms();
  }, []);
  return (
    <main>
      <h1>Welcome to MOM taker.</h1>
    </main>
  );
}
