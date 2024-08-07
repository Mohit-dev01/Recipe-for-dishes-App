import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex  flex-col items-center justify-center">
      <h1 className="text-center  font-bold">Welcome to Recipe App</h1>
      <Link
        className="flex items-center justify-center pt-10 underline"
        href={"/recipe-list"}
      >
        Explore Recipes
      </Link>
      <div className="text-sm">(Click here to know more recipes)</div>
      <div className="font-bold text-center mt-10">
        A simple and a basic app to guide you for recipe, made with Next js
      </div>
    </div>
  );
}
