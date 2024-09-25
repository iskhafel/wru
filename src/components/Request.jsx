/* eslint-disable no-unused-vars */
import React from "react";

export default function Request() {
  return (
    <section className="container px-4 pb-12 mx-auto">
      <div className="max-w-xl p-6 mx-auto bg-slate-800 rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Requests Form</h2>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-3 mt-2 border rounded-md"
              placeholder="my@email.com"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="p-3 mt-2 border rounded-md"
              placeholder="Your name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg">
              Message
            </label>
            <textarea
              id="message"
              className="p-3 mt-2 border rounded-md"
              placeholder="Description here"
              rows="4"
              required
            />
          </div>
          <div>
            <h5 className="text-lg font-bold">Privacy</h5>
            <p className="text-sm text-gray-500">
              Personal information will remain hidden and secured.
            </p>
          </div>
          <button className="w-full p-3 text-lg text-white rounded bg-slate-600 hover:bg-slate-900">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
