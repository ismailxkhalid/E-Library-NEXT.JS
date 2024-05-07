import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";

export default async function Home() {
  // Data fetching from an external API or database
  const response = await fetch(`${process.env.BACKEND_URL}/books`);
  if (!response.ok) {
    throw new Error("Failed to fetch books data");
  }

  const books = await response.json();

  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
