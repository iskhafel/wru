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
            <h2 className="text-5xl font-bold mb-4">Welcome to My App</h2>
            <p className="text-lg mb-6">Nonton Gratis Hanya Disini</p>
            <a
              href="#"
              className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-full"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
