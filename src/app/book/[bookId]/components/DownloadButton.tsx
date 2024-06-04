"use client";
import React from "react";
import { Download, ShoppingCart } from "lucide-react";

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
  const handleDownload = () => {
    window.open(fileLink, "_blank");
  };

  const handleBuy = () => {
    alert("Coming Soon");
  };

  return (
    <div>
      <button
        onClick={handleBuy}
        className="mt-10 h-10 rounded-md bg-lime-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-lime-600 active:bg-lime-700 flex items-center justify-between gap-2"
      >
        Buy Now
        <ShoppingCart size={20} />
      </button>
      {/* <button
        onClick={handleDownload}
        className="mt-10 h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700 flex items-center justify-between gap-2"
      >
        Download
        <Download size={20} />
      </button> */}
    </div>
  );
};

export default DownloadButton;
