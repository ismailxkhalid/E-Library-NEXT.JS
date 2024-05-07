import Banner from "@/app/(home)/components/Banner";
import Skeleton from "@/app/(home)/components/Skeleton";
import BookList from "./components/BookList";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Skeleton />}>
        <BookList />
      </Suspense>
    </>
  );
}
