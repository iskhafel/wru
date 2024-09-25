/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";

export default function App() {
  const movieList = [
    {
      id: 1,
      title: "The Matrix",
      description:
        "The Matrix is a 1999 science fiction action film written and directed by the Wachowski brothers.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      title: "The Matrix Reloaded",
      description:
        "The Matrix Reloaded is a 2003 science fiction action film written and directed by the Wachowski brothers.",
      image:
        "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: 3,
      title: "The Matrix Revolutions",
      description:
        "The Matrix Revolutions is a 2003 science fiction action film written and directed by the Wachowski brothers.",
      image:
        "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: 4,
      title: "The Matrix",
      description:
        "The Matrix is a 1999 science fiction action film written and directed by the Wachowski brothers.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      title: "The Matrix Reloaded",
      description:
        "The Matrix Reloaded is a 2003 science fiction action film written and directed by the Wachowski brothers.",
      image:
        "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: 6,
      title: "The Matrix Revolutions",
      description:
        "The Matrix Revolutions is a 2003 science fiction action film written and directed by the Wachowski brothers.",
      image:
        "https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <MovieCard movieList={movieList} />
      <Footer />
    </>
  );
}
