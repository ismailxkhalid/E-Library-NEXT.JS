import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <>
      <div className="flex gap-5 border p-5 shadow-md rounded">
        <Image
          src={book.coverImage}
          alt={book.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "12rem" }}
        />
        <div className="w-full relative">
          <h2 className="line-clamp-2 text-xl font-bold text-primary-600 text-balance uppercase">
            {book.title}
          </h2>
          <p className="font-bold text-primary-900 mt-1">{book.author.name}</p>

          <p className="border border-stalte-500 px-2 w-fit rounded-full text-sm font-light bg-sky-50 mt-4">
            {book.genre}
          </p>

          <div className="w-full flex items-center justify-between absolute bottom-0">
            <Link
              href={`/book/${book._id}`}
              className=" py-1 px-2 rounded border border-primary-500  inline-block text-primary-500 font-medium text-sm
                    hover:border-primary-100 hover:bg-primary-100 transition"
            >
              Read more
            </Link>
            <p className="text-lime-500 font-bold">
              {" "}
              <span className="">$</span>
              {book.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
