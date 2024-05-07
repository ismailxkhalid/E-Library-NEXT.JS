import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t p-5 text-center">
      <span>
        © 2024{" "}
        <a
          className="text-primary-500 font-semibold hover:underline hover:text-primary-300"
          target="_blank"
          href="https://www.ismailxkhalid.com"
        >
          Ismail Khalid
        </a>{" "}
        All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
