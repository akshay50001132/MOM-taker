import Image from "next/image";

export default function Home() {
  return (
    <main>
      <p>Welcome to MOM taker.</p>

      <div className="flex gap-2 my-2">
        <div className="h-[100px] w-[100px] bg-white-primary"></div>
        <div className="h-[100px] w-[100px] bg-white-secondary"></div>
        <div className="h-[100px] w-[100px] bg-white-tertiary"></div>
        <div className="h-[100px] w-[100px] bg-white-fourth"></div>
        <div className="h-[100px] w-[100px] bg-white-fifth"></div>
      </div>

      <div className="flex gap-2">
        <div className="h-[100px] w-[100px] bg-black-primary"></div>
        <div className="h-[100px] w-[100px] bg-black-secondary"></div>
        <div className="h-[100px] w-[100px] bg-black-tertiary"></div>
        <div className="h-[100px] w-[100px] bg-black-fourth"></div>
        <div className="h-[100px] w-[100px] bg-black-fifth"></div>
      </div>
    </main>
  );
}
