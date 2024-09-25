/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function MovieCard({ movieList }) {
  return (
    <div>
      <section className="py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Latest Movies
        </h1>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6 p-6">
            {movieList.map((item) => (
              <div
                key={item.id}
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div className="h-96 w-full max-w-xs">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="text-3xl font-bold text-white">
                    {item.title}
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 py-4">
                    {item.description}
                  </p>
                  <button className="btn btn-primary">See More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
