/* eslint-disable no-unused-vars */
import React from "react";

export default function Hero() {
  return (
    <div>
      <section
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: `url('/lloyd-dirks-unsplash.jpg')`,
        }}
      >
        <div className="h-96 bg-black text-white bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-4 p-4">
              Aplikasi Nonton Gratis
            </h2>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-24 md:w-auto container mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
