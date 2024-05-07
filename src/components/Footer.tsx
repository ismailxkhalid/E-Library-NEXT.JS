import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t p-5 text-center">
      <span>© 2024 DIGITAL DREAMSHELF All rights reserved.</span>
      <br />
      <span>
        Made with 💛 by{" "}
        <a
          className="font-bold hover:underline hover:text-slate-500"
          href="https://www.ismailxkhalid.com"
          target="_blank"
        >
          Ismail Khalid
        </a>{" "}
      </span>
    </footer>
  );
};

export default Footer;
