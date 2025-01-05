import { useState } from "react";

import dynamic from "next/dynamic";
// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

import "react-quill-new/dist/quill.snow.css";

export default function CreateMomPage() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const saveMom = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mom/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: value,
        }),
        credentials: "include", // Include cookies in the request
      });
    } catch (error) {}
  };

  return (
    <main>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <button onClick={() => saveMom()}>Save</button>
    </main>
  );
}
