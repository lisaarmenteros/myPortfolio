import React from "react";
// import image from "../images/flower.jpeg";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-100">
      {/*<img
        src={image}
        alt="Flower"
        className="absolute object-cover w-full h-full"
      />*/}
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-pink-800 font-bold monospace leadin-none lg:leading-snug home-name">
          Hello. I am Lisa.
        </h1>
      </section>
    </main>
  );
}
