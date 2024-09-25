/* eslint-disable no-unused-vars */
import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="px-4 bg-[#222831] py-4 text-white">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold underline">WRU</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Requests
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
