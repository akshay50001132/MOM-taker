import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import "react-quill-new/dist/quill.snow.css";

export default function MomByIdPage() {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  const [mom, setMom] = useState(null);

  useEffect(() => {
    const getMomById = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/mom/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies in the request
          }
        );
        const mom = await res.json();
        if (res.status == 200) {
          setMom(mom);
          console.log(mom);
        }
      } catch (error) {}
    };
    if (id) {
      getMomById();
    }
  }, [id]);
  return (
    <main>
      {mom != null && (
        <>
          <p>{mom.title}</p>
          <span>{format(parseISO(mom.createdAt), "d MMM yyyy, hh:mma")}</span>
          <div
            className="ql-editor"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginTop: "10px",
            }}
            dangerouslySetInnerHTML={{ __html: mom.content }} // Display saved content
          />
        </>
      )}
    </main>
  );
}
